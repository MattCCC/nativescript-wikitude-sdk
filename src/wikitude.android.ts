/* eslint-disable @typescript-eslint/naming-convention */
import {
    Common,
    IWikitudeFunctions,
    LicenseProperty,
    UrlProperty,
    FeaturesProperty
} from './wikitude.common';
declare const com;

import * as app from '@nativescript/core/application';
import { lowMemoryEvent, suspendEvent, resumeEvent, on as AddEventListener, off as RemoveEventListener } from '@nativescript/core/application';
import { knownFolders } from '@nativescript/core';

export enum WikitudeFeatures {
    ImageTracking = 2,
    InstantTracking = 4,
    ObjectTracking = 8,
    GeoTracking = 1
}

export class Features {
    static ImageTracking: number = 2;
    static InstantTracking: number = 4;
    static ObjectTracking: number = 8;
    static GeoTracking: number = 8;
}

export class Wikitude extends Common implements IWikitudeFunctions {

    public hasStarted: boolean = false;
    public LocationProvider: LocationProvider<Wikitude>;

    private jsonObjectListener: JsonObjectListener;
    private worldLoadedListener: WorldLoadedListener;
    private sensorAccuracyChangeListener: SensorAccuracyChangeListener;
    private captureScreenCallBack: CaptureScreenCallback;

    public _android: any;

    private licenseKey: string = (global as any).wikitudeLicense || '';
    private url: string;
    private features: any;
    private defaultFeatures: number = Features.GeoTracking | Features.ImageTracking | Features.InstantTracking | Features.ObjectTracking;
    private hasLoaded: boolean;
    private isLicensed: boolean;
    private isDummy: boolean = false;
    private config: any;
    private isFlashEnabled: boolean = false;

    public boundStart: () => void = this.start.bind(this);
    public boundStop: () => void = this.stop.bind(this);
    public boundLowMemory: () => void = this.onLowMemory.bind(this);

    private get currentActivity() {
        return app.android.foregroundActivity || app.android.startActivity;
    }

    private get context() {
        return app.android.context;
    }

    createNativeView() {
        this.log('Creating native view');
        this.hasLoaded = false;
        this.isLicensed = false;

        this.config = new com.wikitude.architect.ArchitectStartupConfiguration();
        this.config.setOrigin('ORIGIN_NATIVESCRIPT');

        if (this.features) {
            this.config.setFeatures(this.features);
        } else {
            this.config.setFeatures(
                com.wikitude.architect.ArchitectStartupConfiguration.Features.Geo
                | com.wikitude.architect.ArchitectStartupConfiguration.Features.ImageTracking
                | com.wikitude.architect.ArchitectStartupConfiguration.Features.InstantTracking
                | com.wikitude.architect.ArchitectStartupConfiguration.Features.ObjectTracking
            );
        }


        if (this.licenseKey) {
            this.log('License key is being set: ' + this.licenseKey);
            this.config.setLicenseKey(this.licenseKey);
            this.isLicensed = true;
        }

        this.LocationProvider = new LocationProvider<Wikitude>(this, 0, 0);

        this.jsonObjectListener = this.registerJSONObjectListener();
        this.worldLoadedListener = this.registerWorldLoadedListener();
        this.sensorAccuracyChangeListener = this.registerSensorAccuracyChangeListener();
        this.captureScreenCallBack = this.registerCaptureScreenCallback();

        this._android = new com.wikitude.architect.ArchitectView(this.currentActivity);

        return this._android;
    }

    initNativeView() {
        this.log('Initialing Native View... ');

        try {
            this._android.onCreate(this.config);
            this._android.onPostCreate();

            this._android.registerWorldLoadedListener(this.worldLoadedListener);
            this._android.addArchitectJavaScriptInterfaceListener(this.jsonObjectListener);

        } catch (e) {
            this.log('Error while Inititating Wikitude', e.message);
            // this.createDummy();
            return;
        }

        AddEventListener(resumeEvent, this.boundStart);
        AddEventListener(suspendEvent, this.boundStop);
        AddEventListener(lowMemoryEvent, this.boundLowMemory);

        if (this.url && !this.hasLoaded) {
            this.log('finished initNativeView, launching url ' + this.url);
            this.loadUrl(this.url, this.features);
        }

        setTimeout(() => this.start());
    }

    disposeNativeView() {
        this.log('Disposing Native View');

        RemoveEventListener(resumeEvent, this.boundStart);
        RemoveEventListener(suspendEvent, this.boundStop);
        RemoveEventListener(lowMemoryEvent, this.boundLowMemory);

        if (this._android) {
            this.log('onDestroy()');
            this.clearCache();
            this._android.onDestroy();
        }
    }

    onLocationChanged(location: android.location.Location) {
        this.log('Location Changed', location);
        if (location && this._android) {
            this.log('sending location', `${location.getLatitude()}, ${location.getLongitude()}`);
            if (location.hasAltitude() && location.hasAccuracy() && location.getAccuracy() < 7) {
                this.setLocation(location.getLatitude(), location.getLongitude(), location.getAltitude(), location.getAccuracy());
            } else {
                this.setLocation(location.getLatitude(), location.getLongitude(), location.hasAccuracy ? location.getAccuracy() : 1000);
            }
        }
    }

    onLowMemory() {
        this.log('[EVENT]', 'Low Memory event called');
        this._android.onLowMemory();
    }

    onUnloaded() {
        super.onUnloaded();
        this.stop();
    }

    start() {
        this.log('Starting Wikitude Plugin', Date.now());
        if (!this.hasStarted) {
            this.hasStarted = true;
            this._android.onResume();
        }

        if (!this.LocationProvider) {
            this.LocationProvider.resume();
        }
    }

    stop() {
        if (this.LocationProvider) {
            this.log('Pausing Location Provider');
            this.LocationProvider.pause();
        }

        if (this.hasStarted) {
            this.log('onPause()');
            this._android.onPause();
            this.hasStarted = false;
        }

        if (!this.isRunning()) {
            return;
        }
    }

    isRunning(): boolean {
        return (this.hasStarted && this.hasLoaded && this._android !== null) && !this.isDummy;
    }

    restart() {
        this.log('restarting wikitude ', Date.now());
        if (this.isRunning()) {
            this.stop();
        }
        this.start();
    }

    // #region wikitude functions
    setLocation(latitude: number, longitude: number, altitude?: number, accuracy?: number) {
        this._android.setLocation(latitude, longitude, altitude, accuracy);
    }

    hasFeature(feature: number): boolean {
        if (feature === null) {
            return com.wikitude.architect.ArchitectView.isDeviceSupported(this.currentActivity);
        }

        const missingFeatures: any = com.wikitude.architect.ArchitectView.isDeviceSupported(this.currentActivity, feature);
        return !missingFeatures.areFeaturesMissing();
    }

    loadUrl(urlString: string, features?: number) {
        this.log('Setting url to ', urlString);
        this.hasLoaded = false;
        this.url = urlString;

        this.features = features;
        if (!this._android || this.isDummy) {
            return;
        }
        if (urlString.indexOf("~/") === 0) {
            urlString = urlString.replace("~/", `file://${knownFolders.currentApp().path}/`);
        }
        this.log('Loading Url:', urlString);
        this._android.load(urlString);
        this.hasLoaded = true;
    }

    reload() {
        if (!this.url) {
            throw new Error("URL is null");
        }
        this.loadUrl(this.url, this.features);
    }

    runJavascript(jsString: string) {
        this._android.callJavascript(jsString);
    }

    clearCache() {
        this._android.clearCache();
    }

    toggleFlash() {
        this.isFlashEnabled = !this.isFlashEnabled;
        this._android.setFlashEnabled(this.isFlashEnabled);
    }

    captureScreen(captureWebViewContent: boolean = false) {
        let captureMode;

        if (captureWebViewContent) {
            captureMode = com.wikitude.architect.ArchitectView.CaptureScreenCallback.CAPTURE_MODE_CAM_AND_WEBVIEW;
        } else {
            captureMode = com.wikitude.architect.ArchitectView.CaptureScreenCallback.CAPTURE_MODE_CAM;
        }

        try {
            this._android.captureScreen(captureMode, this.captureScreenCallBack);
        } catch (e) {
            this.onScreenCaptureFailed(e);
        }
    }

    switchCamera() {
        let newCameraPosition = null;
        let currentCameraPosition = this._android.getCurrentCamera();

        if (currentCameraPosition === com.wikitude.common.camera.CameraSettings.CameraPosition.FRONT) {
            newCameraPosition = com.wikitude.common.camera.CameraSettings.CameraPosition.BACK;
        } else if (currentCameraPosition === com.wikitude.common.camera.CameraSettings.CameraPosition.BACK) {
            newCameraPosition = com.wikitude.common.camera.CameraSettings.CameraPosition.FRONT;
        } else {
            newCameraPosition = com.wikitude.common.camera.CameraSettings.CameraPosition.DEFAULT;
        }

        this._android.setCameraPositionSimple(newCameraPosition);
    }
    // #endregion

    disableLocationProvider() {
        this.log('Disabling Default Location Provider');
        if (this.isRunning()) {
            this.LocationProvider.pause();
        }
    }

    enableLocationProvider() {
        this.log('Enabling Default Location Provider');
        if (this.isRunning()) {
            this.LocationProvider.resume();
        }
    }

    [LicenseProperty.getDefault]() {
        return "";
    }

    [LicenseProperty.setNative](license: string) {
        this.log('LicenseKey Updated!');
        this.log(this.isLicensed ? 'But we are already licensed so we are ignoring it!' : 'We are setting the license now!');

        if (!this.isLicensed && this._android) {
            this.licenseKey = license;
            this.config.setLicenseKey(this.licenseKey);
            this.isLicensed = true;
        }
    }

    [UrlProperty.getDefault]() {
        return "";
    }

    [UrlProperty.setNative](url) {
        this.log('URL Property Changed', url);
        this.loadUrl(url, this.features);
    }

    [FeaturesProperty.getDefault]() {
        return this.features;
    }

    [FeaturesProperty.setNative](requiredFeatures: number[]) {
        let features: number = 0;
        for (let feature of requiredFeatures) {
            features += feature;
        }
        this.config.setFeatures(features);
        this.features = features;
    }

    private registerJSONObjectListener() {
        if (this.jsonObjectListener) {
            return this.jsonObjectListener;
        } else {
            return new JsonObjectListener(this);
        }
    }

    private registerWorldLoadedListener() {
        if (this.worldLoadedListener) {
            return this.worldLoadedListener;
        } else {
            return new WorldLoadedListener(this);
        }
    }

    private registerSensorAccuracyChangeListener() {
        if (this.sensorAccuracyChangeListener) {
            return this.sensorAccuracyChangeListener;
        } else {
            return new SensorAccuracyChangeListener(this);
        }
    }

    private registerCaptureScreenCallback() {
        if (this.captureScreenCallBack) {
            return this.captureScreenCallBack;
        } else {
            return new CaptureScreenCallback(this);
        }
    }

}

@Interfaces([com.wikitude.architect.ArchitectJavaScriptInterfaceListener])
@NativeClass()
class JsonObjectListener extends java.lang.Object {

    private owner: WeakRef<Wikitude>;

    constructor(owner: Wikitude) {
        super();
        this.owner = new WeakRef(owner);
        return global.__native(this);
    }

    onJSONObjectReceived(JsonObject: org.json.JSONObject) {

        const owner = this.owner.get();
        const json = JSON.parse(<any>JsonObject);

        if (owner) {
            owner.onJSONObjectReceived(json);
        }
    }
}

@Interfaces([com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener])
@NativeClass()
class WorldLoadedListener extends java.lang.Object {

    private owner: WeakRef<Wikitude>;

    constructor(owner: Wikitude) {
        super();
        this.owner = new WeakRef(owner);
        return global.__native(this);
    }

    worldLoadFailed(errorCode: number, description: string, failingUrl: string) {

        const owner = this.owner.get();

        if (owner) {
            owner.log(`Error ${errorCode} while Loading URL: ${failingUrl}`);
            owner.log(`Error Description is ${description}`);

            owner.onWorldLoadFailed(failingUrl, errorCode);
        }
    }

    worldWasLoaded(url: string) {
        const owner = this.owner.get();

        if (owner) {
            owner.onWorldLoadSuccess(url);
        }
    }

}

@Interfaces([com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener])
@NativeClass()
class SensorAccuracyChangeListener extends java.lang.Object {

    private owner: WeakRef<Wikitude>;

    constructor(owner: Wikitude) {
        super();

        this.owner = new WeakRef(owner);
        return global.__native(this);
    }

    onCompassAccuracyChanged(accuracy: number) {

        const owner = this.owner.get();

        if (owner) {
            owner.onCompassAccuracyChanged(accuracy);
        }
    }

}

@Interfaces([com.wikitude.architect.ArchitectView.CaptureScreenCallback])
@NativeClass()
class CaptureScreenCallback extends java.lang.Object {

    private owner: WeakRef<Wikitude>;

    constructor(owner: Wikitude) {
        super();

        this.owner = new WeakRef(owner);
        return global.__native(this);
    }

    onScreenCaptured(bitmap: android.graphics.Bitmap) {

        const owner = this.owner.get();

        if (owner) {
            owner.onScreenCaptured(bitmap);
        }
    }

}

export class LocationProvider<Owner> {

    private owner: WeakRef<Owner>;

    public get Owner(): Owner {
        return this.owner.get();
    }

    private get context(): android.content.Context {
        return app.android.context;
    }

    private currentLocation: android.location.Location;
    private running: boolean = false;

    // #region Time definitions
    private time: number = 0;
    public get Time() {
        return this.time;
    }
    public set Time(time: number) {
        if (this.time === time) {
            return;
        }

        this.time = time;
        if (this.running) {
            this.restart();
        }
    }
    // #endregion

    // #region Distance definitions

    private distance: number = 0;
    public get Distance() {
        return this.distance;
    }
    public set Distance(distance: number) {
        if (this.distance === distance) {
            return;
        }

        this.distance = distance;

        if (this.running) {
            this.restart();
        }
    }

    // #endregion

    public LocationManager: android.location.LocationManager = this.context.getSystemService(android.content.Context.LOCATION_SERVICE);
    public Listener = new android.location.LocationListener({
        onLocationChanged: function (location: any) {
            if (!this.isBetterLocation(location)) {
                return;
            }
            if (this.Owner) {
                this.Owner.onLocationChanged(location);
            }
        }.bind(this),
        onProviderDisabled: () => { },
        onProviderEnabled: () => { },
        onStatusChanged: () => { }
    });
    public LocationListener: android.location.LocationListener = new android.location.LocationListener(this.Listener);


    constructor(owner: Owner, time: number, distance: number) {

        this.owner = new WeakRef(owner);

        if (time !== 0) {
            this.Time = time || 1000;
        }

        if (distance !== 0) {
            this.Distance = distance || 1000;
        }
    }

    isBetterLocation(location: android.location.Location): boolean {
        if (this.currentLocation === null) {
            return true;
        }

        const timeDelta = location.getTime() - this.currentLocation.getTime();
        const isSignificantlyNewer = timeDelta < 60000;
        const isSignificantlyOlder = timeDelta < -60000;
        const isNewer = timeDelta > 0;

        if (isSignificantlyNewer) {
            return true;
        } else if (isSignificantlyOlder) {
            return false;
        }

        const accuracyDelta = location.getAccuracy() - this.currentLocation.getAccuracy();
        const isMoreAccurate = accuracyDelta < 0;
        const isLessAccurate = accuracyDelta > 0;
        const isSignificantlyLessAccurate = accuracyDelta > 200;
        const isFromSameProvider = this.isSameProvider(location.getProvider(), this.currentLocation.getProvider());

        if (isMoreAccurate) {
            return true;
        } else if (isLessAccurate) {
            return false;
        }

        return isNewer && isFromSameProvider && !isSignificantlyLessAccurate;
    }

    isSameProvider(currentLocation: string, oldLocation: string): boolean {
        if (currentLocation === null) {
            return oldLocation === null;
        }

        const CurrentLocation = new java.lang.String(currentLocation);
        const OldLocation = new java.lang.String(oldLocation);
        return CurrentLocation.equals(OldLocation);
    }

    setOwner(owner: any) {
        (this.Listener as any).owner = new WeakRef(owner);
    }

    private restart() {
        if (!this.running) {
            return;
        }

        this.pause();
        this.resume();
    }

    public pause() {
        if (!this.running) {
            return;
        }
        this.running = false;
        this.LocationManager.removeUpdates(this.LocationListener);
    }

    public resume() {
        if (this.running) {
            return;
        }
        this.running = true;

        this.setupEventListener(android.location.LocationManager.GPS_PROVIDER);
        this.setupEventListener(android.location.LocationManager.NETWORK_PROVIDER);
    }

    private setupEventListener(provider: string) {
        if (!this.LocationManager.isProviderEnabled(provider)) {
            return;
        }

        const lastKnownPosition = this.LocationManager.getLastKnownLocation(provider);
        if (lastKnownPosition !== null) {
            this.LocationListener.onLocationChanged(lastKnownPosition);
        }

        if (this.LocationManager.getProvider(provider) !== null) {
            this.LocationManager.requestLocationUpdates(provider, this.Time, this.Distance, this.LocationListener);
        }
    }
}
