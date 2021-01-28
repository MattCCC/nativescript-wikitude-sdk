/* eslint-disable @typescript-eslint/naming-convention */
import { ContentView, Property } from '@nativescript/core';
export declare class Common extends ContentView implements IWikitudeEventListener {
    static EVENTS: IWikitudeEventNames;
    _android: any;
    _ios: any;
    constructor();
    onUnloaded(): void;
    onWorldLoadSuccess(nav: any): void;
    onWorldLoadFailed(nav: any, error: any): void;
    onJSONObjectReceived(data: any): void;
    onCameraOpen(): void;
    onCameraClose(): void;
    onCameraAborted(): void;
    onScreenCaptured(bitmap: android.graphics.Bitmap | UIImage): void;
    onScreenCaptureFailed(error: any): void;
    onCompassAccuracyChanged(accuracy: number): void;
    onSensorServiceStarted(): void;
    onSensorServiceStopped(): void;
    log(...args: any[]): void;
}
export declare const LicenseProperty: Property<Common, string>;
export declare const UrlProperty: Property<Common, string>;
export declare const FeaturesProperty: Property<Common, number>;
export interface IWikitudeEventNames {
    WORLD_LOAD_SUCCESS: string;
    WORLD_LOAD_FAIL: string;
    JSON_OBJECT_RECEIVED: string;
    SCREEN_CAPTURED: string;
    SCREEN_CAPTURE_FAIL: string;
    CAMERA_OPENED: string;
    CAMERA_CLOSED: string;
    CAMERA_ABORTED: string;
    COMPASS_ACCURACY_CHANGE: string;
    SENSOR_SERVICE_STOPPED: string;
    SENSOR_SERVICE_STARTED: string;
}
export interface IWikitudeFunctions {
    setLocation(latitude: number, longitude: number, altitude?: number, accuracy?: number): void;
    loadUrl(urlString: string, requiredFeatures?: number): void;
    captureScreen(captureWebViewContent: boolean): void;
    disableLocationProvider(): void;
    runJavascript(js: string): void;
    enableLocationProvider(): void;
    switchCamera(): void;
    toggleFlash(): void;
    clearCache(): void;
    reload(): void;
}
export interface IWikitudeEventListener {
    onWorldLoadSuccess(url: string): void;
    onWorldLoadFailed(url: string, reason: any): void;
    onJSONObjectReceived(json: any): void;
    onScreenCaptured(image: any): void;
    onScreenCaptureFailed(reason: any): void;
    onCameraOpen(): void;
    onCameraClose(): void;
    onCameraAborted(): void;
    onCompassAccuracyChanged(currentAccuracy: number): void;
    onSensorServiceStart?: () => void;
    onSensorServiceStopped?: () => void;
}
