// Download WikitudeSDK and extract Framework
const url = require('url');
const path = require('path');

const WIKITUDE_DOWNLOAD_URL = "https://cdn.wikitude.com/sdk/9.0/WikitudeSDK_iOS_9-0-0_2020-03-30_23-30-26.zip";
const PARSED_URL = url.parse(WIKITUDE_DOWNLOAD_URL);
const FILENAME = PARSED_URL.pathname.split("/").pop();
const FILE_PATH = path.normalize('./' + FILENAME);
const TEMP_PATH = path.normalize(`/tmp/${FILENAME.split('.')[0]}`);

function downloadFramework() {
    return new Promise((resolve) => {
        const { request } = require("https"),
            fs = require("fs"),
            { stdout } = require("process");

        let downloadProgress = 0;

        if (fs.existsSync(FILE_PATH)) {
            console.log(' %s Succesfully Downloaded', FILENAME);
            resolve();
        } else {
            const REQUEST = request(PARSED_URL);

            REQUEST.addListener('response', (response) => {

                let DOWNLOAD_PROGRESS;

                const downloadfile = fs.createWriteStream(FILENAME, { 'flags': 'a' });
                console.log("File size " + FILENAME + ": " + response.headers['content-length'] + " bytes.");

                DOWNLOAD_PROGRESS = setInterval(function () {
                    const progress = parseInt((+downloadProgress / +response.headers['content-length']) * 100, 10);
                    stdout.write("Downloading " + progress + "%\r");
                }, 1000);

                response.addListener('data', function (chunk) {
                    downloadProgress += chunk.length;
                    const encoding = 'binary';

                    downloadfile.write(chunk, encoding);
                });
                response.addListener("end", function () {
                    downloadfile.end();
                    clearInterval(DOWNLOAD_PROGRESS);
                    console.log("Finished downloading " + FILENAME);

                    resolve();
                });
            });

            REQUEST.end();
        }
    });
}

function extractFramework() {
    return new Promise(async(resolve, reject) => {
        const EXTRACT = require('extract-zip');
        const FS = require('fs');

        // Check if File Exists
        if (FS.existsSync(FILE_PATH)) {
            console.log(' Extracting %s ', FILENAME, TEMP_PATH);

            await EXTRACT(FILE_PATH, { dir: TEMP_PATH }, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
            });

            console.log(' Extracted Files to %s', TEMP_PATH);
            resolve(TEMP_PATH);
        } else {
            reject(new Error('File does not exist at ' + FILE_PATH));
        }
    });
}

function copyToPlatform(dir) {
    const fs = require('fs-extra');
    const dirPath = path.join(dir, 'Framework', 'WikitudeSDK.framework/');
    const platformFolder = path.normalize('platforms/ios/WikitudeSDK.framework/');

    if (fs.existsSync(dirPath)) {
        console.log('Copying from %s to %s', dirPath, platformFolder);
        return fs.copy(dirPath, platformFolder);
    }

    return Promise.reject(new Error('Does not exist at ' + dir));
}

function cleanup() {
    const fs = require('fs-extra');

    console.log('Removing Temp Data');
    if (fs.existsSync(TEMP_PATH)) {
        fs.removeSync(TEMP_PATH);
        console.log('Removed Temp Data');
    } else {
        console.log('Could not find Temp Data dir. Skiping...');
    }

    // Remove shell scripts of wikitude as otherwise you will have hard time deploying app to App Center
    const platformFolder = path.normalize('platforms/ios/WikitudeSDK.framework/');

    console.log('Removing script strip_wikitude_framework.sh');
    if (fs.existsSync(`${platformFolder}/strip_wikitude_framework.sh`)) {
        fs.removeSync(`${platformFolder}/strip_wikitude_framework.sh`);
        console.log('Removed script strip_wikitude_framework.sh');
    } else {
        console.log('Could not find strip_wikitude_framework.sh file. Skiping...');
    }

    console.log('Removing script wikitude_bitcode.sh');
    if (fs.existsSync(`${platformFolder}/wikitude_bitcode.sh`)) {
        fs.removeSync(`${platformFolder}/wikitude_bitcode.sh`);
        console.log('Removed script wikitude_bitcode.sh');
    } else {
        console.log('Could not find wikitude_bitcode.sh file. Skiping...');
    }

    // console.log('Removing WikitudeSDK Zip');
    // if (fs.existsSync(FILE_PATH)) {
    //     fs.removeSync(FILE_PATH);
    //     console.log('Removed WikitudeSDK Zip');
    // } else {
    //     console.log('Could not find WikitudeSDK Zip file. Skiping...');
    // }
}

downloadFramework()
    .then(extractFramework)
    .then(copyToPlatform)
    .then(() => {
        console.log('Successfully Downloaded and Extracted Wikitude for IOS. cleaning up...');
        cleanup();
    })
    .catch(e => console.error(e.message ? e.message : e));