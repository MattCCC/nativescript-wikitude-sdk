<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue-Wikitude!" />
        <GridLayout columns="*"
            rows="*"
        >
            <Wikitude v-if="permissionsGranted"
                ref="wikitude"
                :url="wikitude.world"
                col="0"
                row="0"
                @WorldLoadSuccess="wikitude.onWorldLoadSuccess"
                @JSONReceived="messageReceived"
            />
        </GridLayout>
    </Page>
</template>

<script>
import { isIOS } from '@nativescript/core';
const permissions = require('nativescript-permissions');

export default {
    data() {
        return {
            permissionsGranted: false,
            wikitude: {
                world: '~/wikitude/sample/index.html',
                onWorldLoadSuccess: (e) => {
                    const wikitudeInstance = e.object;
                    const isIOSStr = isIOS ? 'true' : 'false';
                    const distance = isIOS ? 10 : 0;

                    console.log("distance", distance);

                    console.log('World Load Success', distance, wikitudeInstance);

                    if (isIOS) {
                        this.wikitude = this.$refs.wikitude.nativeView;
                        this.wikitude.runJavascript('World.init(false, "assets/earth.wt3", ' + distance + ', ' + isIOSStr + ')');

                        // Since our permissions plugin doesn't work on iOS, end here
                        return;
                    }

                    this.requestPermissions()
                        .then(() => {
                            console.log("Trigger init call");

                            this.wikitude = this.$refs.wikitude.nativeView;
                            this.wikitude.runJavascript('World.init(false, "assets/earth.wt3", ' + distance + ', ' + isIOSStr + ')');
                        })
                        .catch((ee) => {
                            console.log("Uh oh, no permissions", ee);
                        });
                }
            },
        };
    },
    created() {
        console.log('created');
        if (this.hasPermissions()) {
            console.log('hasPermissions');
            this.permissionsGranted = true;
        } else {
            console.log('requestPermissions');
            this.requestPermissions();
        }
    },
    methods: {
        hasPermissions() {
            // Since our permissions plugin doesn't work on iOS, let Wikitude SDK handle asking for Camera Permissions
            return isIOS || permissions.hasPermissions([
                    android.Manifest.permission.CAMERA,
                    android.Manifest.permission.ACCESS_FINE_LOCATION,
            ]).success === 2;
        },
        async requestPermissions() {
            if (this.permissionsGranted) {
                return true;
            }

            await permissions.requestPermission(android.Manifest.permission.CAMERA, "camera?");
            await permissions.requestPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, "Access fine location sources?");

            this.permissionsGranted = true;

            console.log('Permissions granted');
        },
        messageReceived(event) {
            if (event.data.json.action === 'navigate') {
                console.log("Tapped");
            }
        },
    }
};
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #fff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333;
}
</style>
