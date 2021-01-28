import { Common, IWikitudeFunctions } from './wikitude.common';
export declare class WikitudeDelegate extends NSObject {
    static ObjCProtocols: {
        prototype: WTArchitectViewDelegate;
    }[];
    private owner;
    get Owner(): Wikitude;
    initWithOwner(owner: Wikitude): WikitudeDelegate;
    architectViewDidFinishLoadArchitectWorldNavigation(architectView: any, navigation: any): void;
    architectViewDidFailToLoadArchitectWorldNavigationWithError(architectView: any, navigation: any, error: NSError): void;
    architectViewReceivedJSONObject(architectView: any, data: NSDictionary<string, any>): void;
    architectViewDidCaptureScreenWithContext(architectView: any, context: NSDictionary<string, any>): void;
    architectViewdidFailCaptureScreenWithError(error: any): void;
}
export declare class Wikitude extends Common implements IWikitudeFunctions {
    hasStarted: boolean;
    Delegate: WikitudeDelegate;
    MotionManager: CMMotionManager;
    ios: WTArchitectView;
    private licenseKey;
    private url;
    private features;
    private defaultFeatures;
    private hasLoaded;
    private isLicensed;
    private config;
    private isFlashEnabled;
    private wikitudeConfig;
    private boundStart;
    private boundStop;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    start(): void;
    stop(): void;
    restart(): void;
    onUnloaded(): void;
    hasFeature(feature: any): boolean;
    runJavascript(jsString: string): void;
    loadUrl(urlString: any, features?: number): void;
    reload(): void;
    setLocation(latitude: number, longitude: number, accuracy: number): any;
    disableLocationProvider(): void;
    enableLocationProvider(): void;
    captureScreen(captureWebViewContent?: boolean, justSave?: boolean): void;
    isRunning(): boolean;
    clearCache(): void;
    toggleFlash(): void;
    switchCamera(): void;
    registerPlugin(plugin: any): boolean;
    removePlugin(plugin: any): boolean;
    removeNamedPlugin(pluginName: string): boolean;
}
export declare enum WikitudeFeatures {
    ImageTracking = 1,
    InstantTracking = 4,
    ObjectTracking = 8,
    GeoTracking = 64
}
export declare class Features {
    static ImageTracking: number;
    static InstantTracking: number;
    static ObjectTracking: number;
    static GeoTracking: number;
}
