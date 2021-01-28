
declare class WTArchitectStartupConfiguration extends WTStartupConfiguration {

	static alloc(): WTArchitectStartupConfiguration; // inherited from NSObject

	static new(): WTArchitectStartupConfiguration; // inherited from NSObject

	static transferArchitectStartupConfigurationToArchitectStartupConfiguration(sourceArchitectStartupConfiguration: WTArchitectStartupConfiguration, destinationArchitectStartupConfiguration: WTArchitectStartupConfiguration): void;

	desiredHeadingFilter: number;

	desiredLocationAccuracy: number;

	desiredLocationDistanceFilter: number;

	disableWebViewScrollAndZoom: boolean;

	overrideHardwareMuteSwitch: boolean;
}

declare class WTArchitectView extends UIView {

	static SDKBuildInformation(): WTSDKBuildInformation;

	static alloc(): WTArchitectView; // inherited from NSObject

	static appearance(): WTArchitectView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): WTArchitectView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): WTArchitectView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): WTArchitectView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): WTArchitectView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): WTArchitectView; // inherited from UIAppearance

	static isDeviceSupportedForRequiredFeaturesError(requiredFeatures: WTFeatures): boolean;

	static isDeviceSupportingFeaturesError(requiredFeatures: WTFeatures): boolean;

	static new(): WTArchitectView; // inherited from NSObject

	static sdkVersion(): string;

	debugDelegate: WTArchitectViewDebugDelegate;

	delegate: WTArchitectViewDelegate;

	readonly isRunning: boolean;

	requiredFeatures: WTFeatures;

	shouldAuthorizeRestrictedAPIs: boolean;

	shouldWebViewRotate: boolean;

	callJavaScript(javaScript: string): void;

	captureScreenWithModeUsingSaveModeSaveOptionsContext(captureMode: WTScreenshotCaptureMode, saveMode: WTScreenshotSaveMode, options: WTScreenshotSaveOptions, context: NSDictionary<any, any>): void;

	clearCache(): void;

	cullingDistance(): number;

	injectLocationWithLatitudeLongitudeAccuracy(latitude: number, longitude: number, accuracy: number): void;

	injectLocationWithLatitudeLongitudeAltitudeAccuracy(latitude: number, longitude: number, altitude: number, accuracy: number): void;

	isRotatingToInterfaceOrientation(): boolean;

	isUsingInjectedLocation(): boolean;

	loadArchitectWorldFromURL(architectWorldURL: NSURL): WTNavigation;

	reloadArchitectWorld(): void;

	setCullingDistance(cullingDistance: number): void;

	setLicenseKey(licenseKey: string): void;

	setShouldRotateToInterfaceOrientation(shouldAutoRotate: boolean, interfaceOrientation: UIInterfaceOrientation): void;

	setUseInjectedLocation(useInjectedLocation: boolean): void;

	shouldTransitionToSizeWithTransitionCoordinator(size: CGSize, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	startCompletion(startupHandler: (p1: WTArchitectStartupConfiguration) => void, completionHandler: (p1: boolean, p2: NSError) => void): void;

	stop(): void;
}

interface WTArchitectViewDebugDelegate extends NSObjectProtocol {

	architectViewDidEncounterInternalError(architectView: WTArchitectView, error: NSError): void;
}
declare var WTArchitectViewDebugDelegate: {

	prototype: WTArchitectViewDebugDelegate;
};

interface WTArchitectViewDelegate extends NSObjectProtocol {

	activityItemsForURLTitleUsedBySafariViewController?(URL: NSURL, title: string, safariViewController: SFSafariViewController): NSArray<UIActivity>;

	architectViewDidCaptureScreenWithContext?(architectView: WTArchitectView, context: NSDictionary<any, any>): void;

	architectViewDidFailCaptureScreenWithError?(architectView: WTArchitectView, error: NSError): void;

	architectViewDidFailToAuthorizeRestrictedAppleiOSSDKAPIs?(architectView: WTArchitectView, error: NSError): void;

	architectViewDidFailToLoadArchitectWorldNavigationWithError?(architectView: WTArchitectView, navigation: WTNavigation, error: NSError): void;

	architectViewDidFinishLoadArchitectWorldNavigation?(architectView: WTArchitectView, navigation: WTNavigation): void;

	architectViewDidPresentViewControllerOnViewController?(architectView: WTArchitectView, presentedViewController: UIViewController, presentingViewController: UIViewController): void;

	architectViewDidRequestAlertWithMessage?(architectView: WTArchitectView, message: string): void;

	architectViewDidRequestConfirmPanelWithMessage?(architectView: WTArchitectView, message: string): boolean;

	architectViewDidRequestPrompt?(architectView: WTArchitectView, prompt: string): string;

	architectViewDidSwitchToActiveCaptureDevicePosition?(architectView: WTArchitectView, activeCaptureDevicePosition: AVCaptureDevicePosition): void;

	architectViewFinishedDeviceSensorsCalibration?(architectView: WTArchitectView): void;

	architectViewInvokedURL?(architectView: WTArchitectView, URL: NSURL): void;

	architectViewNeedsDeviceSensorCalibration?(architectView: WTArchitectView): void;

	architectViewReceivedJSONObject?(architectView: WTArchitectView, jsonObject: NSDictionary<any, any>): void;

	architectViewWillPresentViewControllerOnViewController?(architectView: WTArchitectView, presentedViewController: UIViewController, presentingViewController: UIViewController): void;

	presentViewControllerForArchitectView?(viewController: UIViewController, architectView: WTArchitectView): boolean;

	presentingViewControllerForViewControllerPresentationInArchitectView?(architectView: WTArchitectView): UIViewController;

	shouldArchitectViewPresentSafariViewControllerInReaderModeIfAvailable?(architectView: WTArchitectView): boolean;

	shouldArchitectViewPresentViewControllerAnimated?(architectView: WTArchitectView, viewController: UIViewController): boolean;
}
declare var WTArchitectViewDelegate: {

	prototype: WTArchitectViewDelegate;
};

declare class WTAuthorizationRequestManager extends NSObject {

	static alloc(): WTAuthorizationRequestManager; // inherited from NSObject

	static humanReadableDescriptionForUnauthorizedAppleiOSSDKAPI(unauthorizedAppleiOSSDKAPI: string): string;

	static new(): WTAuthorizationRequestManager; // inherited from NSObject

	static restrictedAppleiOSSDKAPIAuthorizationsForRequiredFeatures(requiredFeatures: WTFeatures): NSOrderedSet<number>;

	static stringFromAVFoundationAuthenticationStatus(authorizationStatus: AVAuthorizationStatus): string;

	static stringFromAuthorizationStatusForUnauthorizedAppleiOSSDKAPI(authorizationStatus: number, unauthorizedAppleiOSSDKAPI: string): string;

	static stringFromCoreLocationAuthenticationStatus(authorizationStatus: CLAuthorizationStatus): string;

	static stringFromPhotosAuthenticationStatus(authorizationStatus: PHAuthorizationStatus): string;

	isRequestingRestrictedAppleiOSSDKAPIAuthorization: boolean;

	requestRestrictedAppleiOSSDKAPIAuthorizationCompletion(requiredAppleiOSSDKAPIAuthorizations: NSOrderedSet<number>, completionHandler: (p1: boolean, p2: NSError) => void): void;
}

declare const enum WTCaptureDeviceResolution {

	SD_640x480 = 1,

	HD_1280x720 = 2,

	FULL_HD_1920x1080 = 3,

	AUTO = 4
}

declare const enum WTFeatures {

	Feature_ImageTracking = 1,

	Feature_InstantTracking = 4,

	Feature_ObjectTracking = 8,

	Feature_Geo = 64,

	Feature_PhotoLibraryScreenshotImport = 128
}

declare class WTNavigation extends NSObject implements NSCopying {

	static alloc(): WTNavigation; // inherited from NSObject

	static new(): WTNavigation; // inherited from NSObject

	readonly finalURL: NSURL;

	readonly isLoading: boolean;

	readonly originalURL: NSURL;

	readonly wasInterrupted: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum WTRestrictedAppleiOSSDKAPI {

	Camera = 0,

	Location = 1,

	PhotoLibrary = 2
}

declare class WTSDKBuildInformation extends NSObject {

	static alloc(): WTSDKBuildInformation; // inherited from NSObject

	static new(): WTSDKBuildInformation; // inherited from NSObject

	readonly buildConfiguration: string;

	readonly buildDate: string;

	readonly buildNumber: string;

	toJSONString(): string;
}

declare const enum WTScreenshotCaptureMode {

	Cam = 0,

	CamAndWebView = 1
}

declare const enum WTScreenshotSaveMode {

	PhotoLibrary = 1,

	BundleDirectory = 2,

	Delegate = 3
}

declare const enum WTScreenshotSaveOptions {

	Option_CallDelegateOnSuccess = 1,

	Option_SavingWithoutOverwriting = 2,

	Option_None = 0
}

declare class WTStartupConfiguration extends NSObject implements NSCopying {

	static alloc(): WTStartupConfiguration; // inherited from NSObject

	static new(): WTStartupConfiguration; // inherited from NSObject

	static transferStartupConfigurationToStartupConfiguration(sourceStartupConfiguration: WTStartupConfiguration, destinationStartupConfiguration: WTStartupConfiguration): void;

	captureDeviceFocusDistance: number;

	captureDeviceFocusMode: AVCaptureFocusMode;

	captureDeviceFocusRangeRestriction: AVCaptureAutoFocusRangeRestriction;

	captureDevicePosition: AVCaptureDevicePosition;

	captureDeviceResolution: WTCaptureDeviceResolution;

	shouldExcludeBinnedVideoFormats: boolean;

	shouldUseSystemDeviceSensorCalibrationDisplay: boolean;

	targetFrameRate: CMTime;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum WTTrackerEfficiencyMode {

	HighAccuracy = 0,

	EnergyEfficiency = 1
}

declare var WikitudeSDKVersionNumber: number;

declare var WikitudeSDKVersionString: interop.Reference<number>;

declare var kWTScreenshotBundleDirectoryKey: string;

declare var kWTScreenshotCaptureModeKey: string;

declare var kWTScreenshotImageKey: string;

declare var kWTScreenshotSaveModeKey: string;

declare var kWTUnauthorizedAppleiOSSDKAPIsKey: string;
