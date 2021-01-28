
declare const enum MDCAnimationTimingFunction {

	Standard = 0,

	Deceleration = 1,

	Acceleration = 2,

	Sharp = 3,

	EaseInOut = 0,

	EaseOut = 1,

	EaseIn = 2,

	Translate = 0,

	TranslateOnScreen = 1,

	TranslateOffScreen = 2,

	FadeIn = 1,

	FadeOut = 2
}

interface MDCElevatable extends NSObjectProtocol {

	mdc_currentElevation: number;

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void;
}
declare var MDCElevatable: {

	prototype: MDCElevatable;
};

interface MDCElevationOverriding {

	mdc_overrideBaseElevation: number;
}
declare var MDCElevationOverriding: {

	prototype: MDCElevationOverriding;
};

declare class MDCFontScaler extends NSObject {

	static alloc(): MDCFontScaler; // inherited from NSObject

	static new(): MDCFontScaler; // inherited from NSObject

	static scalerForMaterialTextStyle(textStyle: string): MDCFontScaler;

	constructor(o: { forMaterialTextStyle: string; });

	initForMaterialTextStyle(textStyle: string): this;

	scaledFontWithFont(font: UIFont): UIFont;

	scaledValueForValue(value: number): number;
}

declare const enum MDCFontTextStyle {

	Body1 = 0,

	Body2 = 1,

	Caption = 2,

	Headline = 3,

	Subheadline = 4,

	Title = 5,

	Display1 = 6,

	Display2 = 7,

	Display3 = 8,

	Display4 = 9,

	Button = 10
}

declare class MDCInkGestureRecognizer extends UIGestureRecognizer {

	static alloc(): MDCInkGestureRecognizer; // inherited from NSObject

	static new(): MDCInkGestureRecognizer; // inherited from NSObject

	cancelOnDragOut: boolean;

	dragCancelDistance: number;

	targetBounds: CGRect;

	isTouchWithinTargetBounds(): boolean;

	touchStartLocationInView(view: UIView): CGPoint;
}

declare const enum MDCInkStyle {

	Bounded = 0,

	Unbounded = 1
}

declare class MDCInkTouchController extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): MDCInkTouchController; // inherited from NSObject

	static new(): MDCInkTouchController; // inherited from NSObject

	cancelsOnDragOut: boolean;

	readonly defaultInkView: MDCInkView;

	delaysInkSpread: boolean;

	delegate: MDCInkTouchControllerDelegate;

	dragCancelDistance: number;

	readonly gestureRecognizer: MDCInkGestureRecognizer;

	requiresFailureOfScrollViewGestures: boolean;

	targetBounds: CGRect;

	readonly view: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; });

	addInkView(): void;

	cancelInkTouchProcessing(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithView(view: UIView): this;

	inkViewAtTouchLocation(location: CGPoint): MDCInkView;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MDCInkTouchControllerDelegate extends NSObjectProtocol {

	inkTouchControllerDidProcessInkViewAtTouchLocation?(inkTouchController: MDCInkTouchController, inkView: MDCInkView, location: CGPoint): void;

	inkTouchControllerInkViewAtTouchLocation?(inkTouchController: MDCInkTouchController, location: CGPoint): MDCInkView;

	inkTouchControllerInsertInkViewIntoView?(inkTouchController: MDCInkTouchController, inkView: UIView, view: UIView): void;

	inkTouchControllerShouldProcessInkTouchesAtTouchLocation?(inkTouchController: MDCInkTouchController, location: CGPoint): boolean;
}
declare var MDCInkTouchControllerDelegate: {

	prototype: MDCInkTouchControllerDelegate;
};

declare class MDCInkView extends UIView {

	static alloc(): MDCInkView; // inherited from NSObject

	static appearance(): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCInkView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCInkView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCInkView; // inherited from UIAppearance

	static injectedInkViewForView(view: UIView): MDCInkView;

	static new(): MDCInkView; // inherited from NSObject

	animationDelegate: MDCInkViewDelegate;

	customInkCenter: CGPoint;

	readonly defaultInkColor: UIColor;

	inkColor: UIColor;

	inkStyle: MDCInkStyle;

	maxRippleRadius: number;

	traitCollectionDidChangeBlock: (p1: MDCInkView, p2: UITraitCollection) => void;

	usesCustomInkCenter: boolean;

	usesLegacyInkRipple: boolean;

	cancelAllAnimationsAnimated(animated: boolean): void;

	startTouchBeganAnimationAtPointCompletion(point: CGPoint, completionBlock: () => void): void;

	startTouchBeganAtPointAnimatedWithCompletion(point: CGPoint, animated: boolean, completionBlock: () => void): void;

	startTouchEndAtPointAnimatedWithCompletion(point: CGPoint, animated: boolean, completionBlock: () => void): void;

	startTouchEndedAnimationAtPointCompletion(point: CGPoint, completionBlock: () => void): void;
}

interface MDCInkViewDelegate extends NSObjectProtocol {

	inkAnimationDidEnd?(inkView: MDCInkView): void;

	inkAnimationDidStart?(inkView: MDCInkView): void;
}
declare var MDCInkViewDelegate: {

	prototype: MDCInkViewDelegate;
};

declare class MDCPalette extends NSObject {

	static alloc(): MDCPalette; // inherited from NSObject

	static new(): MDCPalette; // inherited from NSObject

	static paletteGeneratedFromColor(target500Color: UIColor): MDCPalette;

	static paletteWithTintsAccents(tints: NSDictionary<string, UIColor>, accents: NSDictionary<string, UIColor>): MDCPalette;

	readonly accent100: UIColor;

	readonly accent200: UIColor;

	readonly accent400: UIColor;

	readonly accent700: UIColor;

	readonly tint100: UIColor;

	readonly tint200: UIColor;

	readonly tint300: UIColor;

	readonly tint400: UIColor;

	readonly tint50: UIColor;

	readonly tint500: UIColor;

	readonly tint600: UIColor;

	readonly tint700: UIColor;

	readonly tint800: UIColor;

	readonly tint900: UIColor;

	static readonly amberPalette: MDCPalette;

	static readonly blueGreyPalette: MDCPalette;

	static readonly bluePalette: MDCPalette;

	static readonly brownPalette: MDCPalette;

	static readonly cyanPalette: MDCPalette;

	static readonly deepOrangePalette: MDCPalette;

	static readonly deepPurplePalette: MDCPalette;

	static readonly greenPalette: MDCPalette;

	static readonly greyPalette: MDCPalette;

	static readonly indigoPalette: MDCPalette;

	static readonly lightBluePalette: MDCPalette;

	static readonly lightGreenPalette: MDCPalette;

	static readonly limePalette: MDCPalette;

	static readonly orangePalette: MDCPalette;

	static readonly pinkPalette: MDCPalette;

	static readonly purplePalette: MDCPalette;

	static readonly redPalette: MDCPalette;

	static readonly tealPalette: MDCPalette;

	static readonly yellowPalette: MDCPalette;

	constructor(o: { tints: NSDictionary<string, UIColor>; accents: NSDictionary<string, UIColor>; });

	initWithTintsAccents(tints: NSDictionary<string, UIColor>, accents: NSDictionary<string, UIColor>): this;
}

declare var MDCPaletteAccent100Name: string;

declare var MDCPaletteAccent200Name: string;

declare var MDCPaletteAccent400Name: string;

declare var MDCPaletteAccent700Name: string;

declare var MDCPaletteTint100Name: string;

declare var MDCPaletteTint200Name: string;

declare var MDCPaletteTint300Name: string;

declare var MDCPaletteTint400Name: string;

declare var MDCPaletteTint500Name: string;

declare var MDCPaletteTint50Name: string;

declare var MDCPaletteTint600Name: string;

declare var MDCPaletteTint700Name: string;

declare var MDCPaletteTint800Name: string;

declare var MDCPaletteTint900Name: string;

declare const enum MDCRippleState {

	Normal = 0,

	Highlighted = 1,

	Selected = 2,

	Dragged = 4
}

declare const enum MDCRippleStyle {

	Bounded = 0,

	Unbounded = 1
}

declare class MDCRippleTouchController extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): MDCRippleTouchController; // inherited from NSObject

	static new(): MDCRippleTouchController; // inherited from NSObject

	delegate: MDCRippleTouchControllerDelegate;

	readonly gestureRecognizer: UILongPressGestureRecognizer;

	readonly rippleView: MDCRippleView;

	shouldProcessRippleWithScrollViewGestures: boolean;

	readonly view: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; deferred: boolean; });

	addRippleToView(view: UIView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithView(view: UIView): this;

	initWithViewDeferred(view: UIView, deferred: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MDCRippleTouchControllerDelegate extends NSObjectProtocol {

	rippleTouchControllerDidProcessRippleViewAtTouchLocation?(rippleTouchController: MDCRippleTouchController, rippleView: MDCRippleView, location: CGPoint): void;

	rippleTouchControllerInsertRippleViewIntoView?(rippleTouchController: MDCRippleTouchController, rippleView: MDCRippleView, view: UIView): void;

	rippleTouchControllerShouldProcessRippleTouchesAtTouchLocation?(rippleTouchController: MDCRippleTouchController, location: CGPoint): boolean;
}
declare var MDCRippleTouchControllerDelegate: {

	prototype: MDCRippleTouchControllerDelegate;
};

declare class MDCRippleView extends UIView {

	static alloc(): MDCRippleView; // inherited from NSObject

	static appearance(): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRippleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCRippleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRippleView; // inherited from UIAppearance

	static new(): MDCRippleView; // inherited from NSObject

	activeRippleColor: UIColor;

	maximumRadius: number;

	rippleColor: UIColor;

	rippleStyle: MDCRippleStyle;

	rippleViewDelegate: MDCRippleViewDelegate;

	traitCollectionDidChangeBlock: (p1: MDCRippleView, p2: UITraitCollection) => void;

	usesSuperviewShadowLayerAsMask: boolean;

	beginRippleTouchDownAtPointAnimatedCompletion(point: CGPoint, animated: boolean, completion: () => void): void;

	beginRippleTouchUpAnimatedCompletion(animated: boolean, completion: () => void): void;

	cancelAllRipplesAnimatedCompletion(animated: boolean, completion: () => void): void;

	fadeInRippleAnimatedCompletion(animated: boolean, completion: () => void): void;

	fadeOutRippleAnimatedCompletion(animated: boolean, completion: () => void): void;
}

interface MDCRippleViewDelegate extends NSObjectProtocol {

	rippleTouchDownAnimationDidBegin?(rippleView: MDCRippleView): void;

	rippleTouchDownAnimationDidEnd?(rippleView: MDCRippleView): void;

	rippleTouchUpAnimationDidBegin?(rippleView: MDCRippleView): void;

	rippleTouchUpAnimationDidEnd?(rippleView: MDCRippleView): void;
}
declare var MDCRippleViewDelegate: {

	prototype: MDCRippleViewDelegate;
};

declare var MDCShadowElevationAppBar: number;

declare var MDCShadowElevationBottomAppBar: number;

declare var MDCShadowElevationBottomNavigationBar: number;

declare var MDCShadowElevationCardPickedUp: number;

declare var MDCShadowElevationCardResting: number;

declare var MDCShadowElevationDialog: number;

declare var MDCShadowElevationFABPressed: number;

declare var MDCShadowElevationFABResting: number;

declare var MDCShadowElevationMenu: number;

declare var MDCShadowElevationModalActionSheet: number;

declare var MDCShadowElevationModalBottomSheet: number;

declare var MDCShadowElevationNavDrawer: number;

declare var MDCShadowElevationNone: number;

declare var MDCShadowElevationPicker: number;

declare var MDCShadowElevationQuickEntry: number;

declare var MDCShadowElevationQuickEntryResting: number;

declare var MDCShadowElevationRaisedButtonPressed: number;

declare var MDCShadowElevationRaisedButtonResting: number;

declare var MDCShadowElevationRefresh: number;

declare var MDCShadowElevationRightDrawer: number;

declare var MDCShadowElevationSearchBarResting: number;

declare var MDCShadowElevationSearchBarScrolled: number;

declare var MDCShadowElevationSnackbar: number;

declare var MDCShadowElevationSubMenu: number;

declare var MDCShadowElevationSwitch: number;

declare class MDCShadowLayer extends CALayer implements CALayerDelegate {

	static alloc(): MDCShadowLayer; // inherited from NSObject

	static layer(): MDCShadowLayer; // inherited from CALayer

	static new(): MDCShadowLayer; // inherited from NSObject

	elevation: number;

	shadowMaskEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionForLayerForKey(layer: CALayer, event: string): CAAction;

	animateCornerRadiusWithTimingFunctionDuration(cornerRadius: number, timingFunction: CAMediaTimingFunction, duration: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayLayer(layer: CALayer): void;

	drawLayerInContext(layer: CALayer, ctx: any): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layerWillDraw(layer: CALayer): void;

	layoutSublayersOfLayer(layer: CALayer): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCShadowMetrics extends NSObject {

	static alloc(): MDCShadowMetrics; // inherited from NSObject

	static metricsWithElevation(elevation: number): MDCShadowMetrics;

	static new(): MDCShadowMetrics; // inherited from NSObject

	readonly bottomShadowOffset: CGSize;

	readonly bottomShadowOpacity: number;

	readonly bottomShadowRadius: number;

	readonly topShadowOffset: CGSize;

	readonly topShadowOpacity: number;

	readonly topShadowRadius: number;
}

declare class MDCStatefulRippleView extends MDCRippleView {

	static alloc(): MDCStatefulRippleView; // inherited from NSObject

	static appearance(): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCStatefulRippleView; // inherited from UIAppearance

	static new(): MDCStatefulRippleView; // inherited from NSObject

	allowsSelection: boolean;

	dragged: boolean;

	rippleHighlighted: boolean;

	selected: boolean;

	rippleColorForState(state: MDCRippleState): UIColor;

	setRippleColorForState(rippleColor: UIColor, state: MDCRippleState): void;
}

declare class MDCSystemFontLoader extends NSObject implements MDCTypographyFontLoading {

	static alloc(): MDCSystemFontLoader; // inherited from NSObject

	static new(): MDCSystemFontLoader; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	boldFontFromFont(font: UIFont): UIFont;

	boldFontOfSize(fontSize: number): UIFont;

	boldItalicFontOfSize(fontSize: number): UIFont;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLargeForContrastRatios(font: UIFont): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	italicFontFromFont(font: UIFont): UIFont;

	italicFontOfSize(fontSize: number): UIFont;

	lightFontOfSize(fontSize: number): UIFont;

	mediumFontOfSize(fontSize: number): UIFont;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	regularFontOfSize(fontSize: number): UIFont;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCTabBar extends UIView implements MDCElevatable, MDCElevationOverriding, UIBarPositioning {

	static alloc(): MDCTabBar; // inherited from NSObject

	static appearance(): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTabBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTabBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTabBar; // inherited from UIAppearance

	static defaultHeightForBarPositionItemAppearance(position: UIBarPosition, appearance: MDCTabBarItemAppearance): number;

	static defaultHeightForItemAppearance(appearance: MDCTabBarItemAppearance): number;

	static new(): MDCTabBar; // inherited from NSObject

	alignment: MDCTabBarAlignment;

	barTintColor: UIColor;

	bottomDividerColor: UIColor;

	delegate: MDCTabBarDelegate;

	displayDelegate: NSObject;

	displaysUppercaseTitles: boolean;

	enableRippleBehavior: boolean;

	inkColor: UIColor;

	itemAppearance: MDCTabBarItemAppearance;

	items: NSArray<UITabBarItem>;

	rippleColor: UIColor;

	selectedItem: UITabBarItem;

	selectedItemTintColor: UIColor;

	selectedItemTitleFont: UIFont;

	selectionIndicatorTemplate: MDCTabBarIndicatorTemplate;

	sizeClassDelegate: NSObject;

	titleTextTransform: MDCTabBarTextTransform;

	traitCollectionDidChangeBlock: (p1: MDCTabBar, p2: UITraitCollection) => void;

	unselectedItemTintColor: UIColor;

	unselectedItemTitleFont: UIFont;

	readonly barPosition: UIBarPosition; // inherited from UIBarPositioning

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	accessibilityElementForItem(item: UITabBarItem): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageTintColorForState(state: MDCTabBarItemState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAlignmentAnimated(alignment: MDCTabBarAlignment, animated: boolean): void;

	setImageTintColorForState(color: UIColor, state: MDCTabBarItemState): void;

	setSelectedItemAnimated(selectedItem: UITabBarItem, animated: boolean): void;

	setTitleColorForState(color: UIColor, state: MDCTabBarItemState): void;

	titleColorForState(state: MDCTabBarItemState): UIColor;
}

declare const enum MDCTabBarAlignment {

	Leading = 0,

	Justified = 1,

	Center = 2,

	CenterSelected = 3
}

interface MDCTabBarControllerDelegate extends NSObjectProtocol {

	tabBarControllerDidSelectViewController?(tabBarController: MDCTabBarViewController, viewController: UIViewController): void;

	tabBarControllerShouldSelectViewController?(tabBarController: MDCTabBarViewController, viewController: UIViewController): boolean;
}
declare var MDCTabBarControllerDelegate: {

	prototype: MDCTabBarControllerDelegate;
};

interface MDCTabBarDelegate extends UIBarPositioningDelegate {

	tabBarDidSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarShouldSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): boolean;

	tabBarWillSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): void;
}
declare var MDCTabBarDelegate: {

	prototype: MDCTabBarDelegate;
};

interface MDCTabBarDisplayDelegate {

	tabBarDidEndDisplayingItem(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarWillDisplayItem(tabBar: MDCTabBar, item: UITabBarItem): void;
}
declare var MDCTabBarDisplayDelegate: {

	prototype: MDCTabBarDisplayDelegate;
};

declare const enum MDCTabBarExtendedAlignment {

	Leading = 0,

	Justified = 1,

	Center = 2,

	CenterSelected = 3,

	BestEffortJustified = 4
}

declare class MDCTabBarIndicatorAttributes extends NSObject implements NSCopying {

	static alloc(): MDCTabBarIndicatorAttributes; // inherited from NSObject

	static new(): MDCTabBarIndicatorAttributes; // inherited from NSObject

	path: UIBezierPath;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface MDCTabBarIndicatorContext extends NSObjectProtocol {

	bounds: CGRect;

	contentFrame: CGRect;

	item: UITabBarItem;
}
declare var MDCTabBarIndicatorContext: {

	prototype: MDCTabBarIndicatorContext;
};

interface MDCTabBarIndicatorTemplate extends NSObjectProtocol {

	indicatorAttributesForContext(context: MDCTabBarIndicatorContext): MDCTabBarIndicatorAttributes;
}
declare var MDCTabBarIndicatorTemplate: {

	prototype: MDCTabBarIndicatorTemplate;
};

declare const enum MDCTabBarItemAppearance {

	Titles = 0,

	Images = 1,

	TitledImages = 2
}

declare const enum MDCTabBarItemState {

	Normal = 0,

	Selected = 1
}

interface MDCTabBarSizeClassDelegate {

	horizontalSizeClassForObject?(object: UITraitEnvironment): UIUserInterfaceSizeClass;
}
declare var MDCTabBarSizeClassDelegate: {

	prototype: MDCTabBarSizeClassDelegate;
};

declare const enum MDCTabBarTextTransform {

	Automatic = 0,

	None = 1,

	Uppercase = 2
}

declare class MDCTabBarUnderlineIndicatorTemplate extends NSObject implements MDCTabBarIndicatorTemplate {

	static alloc(): MDCTabBarUnderlineIndicatorTemplate; // inherited from NSObject

	static new(): MDCTabBarUnderlineIndicatorTemplate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indicatorAttributesForContext(context: MDCTabBarIndicatorContext): MDCTabBarIndicatorAttributes;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCTabBarViewController extends UIViewController implements MDCTabBarDelegate, UIBarPositioningDelegate {

	static alloc(): MDCTabBarViewController; // inherited from NSObject

	static new(): MDCTabBarViewController; // inherited from NSObject

	delegate: MDCTabBarControllerDelegate;

	selectedViewController: UIViewController;

	readonly tabBar: MDCTabBar;

	tabBarHidden: boolean;

	traitCollectionDidChangeBlock: (p1: MDCTabBarViewController, p2: UITraitCollection) => void;

	viewControllers: NSArray<UIViewController>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTabBarHiddenAnimated(hidden: boolean, animated: boolean): void;

	tabBarDidSelectItem(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarShouldSelectItem(tabBar: MDCTabBar, item: UITabBarItem): boolean;

	tabBarWillSelectItem(tabBar: MDCTabBar, item: UITabBarItem): void;
}

declare var MDCTabBarViewControllerAnimationDuration: number;

declare var MDCTextStyleBody1: string;

declare var MDCTextStyleBody2: string;

declare var MDCTextStyleButton: string;

declare var MDCTextStyleCaption: string;

declare var MDCTextStyleHeadline1: string;

declare var MDCTextStyleHeadline2: string;

declare var MDCTextStyleHeadline3: string;

declare var MDCTextStyleHeadline4: string;

declare var MDCTextStyleHeadline5: string;

declare var MDCTextStyleHeadline6: string;

declare var MDCTextStyleOverline: string;

declare var MDCTextStyleSubtitle1: string;

declare var MDCTextStyleSubtitle2: string;

declare class MDCTypography extends NSObject {

	static alloc(): MDCTypography; // inherited from NSObject

	static body1Font(): UIFont;

	static body1FontOpacity(): number;

	static body2Font(): UIFont;

	static body2FontOpacity(): number;

	static boldFontFromFont(font: UIFont): UIFont;

	static buttonFont(): UIFont;

	static buttonFontOpacity(): number;

	static captionFont(): UIFont;

	static captionFontOpacity(): number;

	static display1Font(): UIFont;

	static display1FontOpacity(): number;

	static display2Font(): UIFont;

	static display2FontOpacity(): number;

	static display3Font(): UIFont;

	static display3FontOpacity(): number;

	static display4Font(): UIFont;

	static display4FontOpacity(): number;

	static fontLoader(): MDCTypographyFontLoading;

	static headlineFont(): UIFont;

	static headlineFontOpacity(): number;

	static isLargeForContrastRatios(font: UIFont): boolean;

	static italicFontFromFont(font: UIFont): UIFont;

	static new(): MDCTypography; // inherited from NSObject

	static setFontLoader(fontLoader: MDCTypographyFontLoading): void;

	static subheadFont(): UIFont;

	static subheadFontOpacity(): number;

	static titleFont(): UIFont;

	static titleFontOpacity(): number;
}

interface MDCTypographyFontLoading extends NSObjectProtocol {

	boldFontFromFont?(font: UIFont): UIFont;

	boldFontOfSize?(fontSize: number): UIFont;

	boldItalicFontOfSize?(fontSize: number): UIFont;

	isLargeForContrastRatios?(font: UIFont): boolean;

	italicFontFromFont?(font: UIFont): UIFont;

	italicFontOfSize?(fontSize: number): UIFont;

	lightFontOfSize(fontSize: number): UIFont;

	mediumFontOfSize(fontSize: number): UIFont;

	regularFontOfSize(fontSize: number): UIFont;
}
declare var MDCTypographyFontLoading: {

	prototype: MDCTypographyFontLoading;
};

declare var MaterialComponentsVersionNumber: number;

declare var MaterialComponentsVersionString: interop.Reference<number>;
