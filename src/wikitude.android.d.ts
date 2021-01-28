import { Common, IWikitudeFunctions } from './wikitude.common';
export declare enum WikitudeFeatures {
    ImageTracking = 2,
    InstantTracking = 4,
    ObjectTracking = 8,
    GeoTracking = 1
}
export declare class Features {
    static ImageTracking: number;
    static InstantTracking: number;
    static ObjectTracking: number;
    static GeoTracking: number;
}
export declare class Wikitude extends Common implements IWikitudeFunctions {
    hasStarted: boolean;
    LocationProvider: LocationProvider<Wikitude>;
    private jsonObjectListener;
    private worldLoadedListener;
    private sensorAccuracyChangeListener;
    private captureScreenCallBack;
    _android: any;
    private licenseKey;
    private url;
    private features;
    private defaultFeatures;
    private hasLoaded;
    private isLicensed;
    private isDummy;
    private config;
    private isFlashEnabled;
    boundStart: () => void;
    boundStop: () => void;
    boundLowMemory: () => void;
    private get currentActivity();
    private get context();
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    onLocationChanged(location: android.location.Location): void;
    onLowMemory(): void;
    onUnloaded(): void;
    start(): void;
    stop(): void;
    isRunning(): boolean;
    restart(): void;
    setLocation(latitude: number, longitude: number, altitude?: number, accuracy?: number): void;
    hasFeature(feature: number): boolean;
    loadUrl(urlString: string, features?: number): void;
    reload(): void;
    runJavascript(jsString: string): void;
    clearCache(): void;
    toggleFlash(): void;
    captureScreen(captureWebViewContent?: boolean): void;
    switchCamera(): void;
    disableLocationProvider(): void;
    enableLocationProvider(): void;
    private registerJSONObjectListener;
    private registerWorldLoadedListener;
    private registerSensorAccuracyChangeListener;
    private registerCaptureScreenCallback;
}
export declare class LocationProvider<Owner> {
    private owner;
    get Owner(): Owner;
    private get context();
    private currentLocation;
    private running;
    private time;
    get Time(): number;
    set Time(time: number);
    private distance;
    get Distance(): number;
    set Distance(distance: number);
    LocationManager: android.location.LocationManager;
    Listener: globalAndroid.location.LocationListener;
    LocationListener: android.location.LocationListener;
    constructor(owner: Owner, time: number, distance: number);
    isBetterLocation(location: android.location.Location): boolean;
    isSameProvider(currentLocation: string, oldLocation: string): boolean;
    setOwner(owner: any): void;
    private restart;
    pause(): void;
    resume(): void;
    private setupEventListener;
}
