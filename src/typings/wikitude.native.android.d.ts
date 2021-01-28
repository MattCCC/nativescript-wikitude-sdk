/* eslint-disable @typescript-eslint/naming-convention */

declare namespace com {
	namespace wikitude {
		namespace a {
			namespace a {
				class a {
					public static class: java.lang.Class<com.wikitude.a.a.a>;
					/**
					 * Constructs a new instance of the com.wikitude.a.a.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		namespace architect {
			class ArchitectJavaScriptInterfaceListener {
				public static class: java.lang.Class<com.wikitude.architect.ArchitectJavaScriptInterfaceListener>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.ArchitectJavaScriptInterfaceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onJSONObjectReceived(param0: org.json.JSONObject): void;
				});
				public constructor();
				public onJSONObjectReceived(param0: org.json.JSONObject): void;
			}
		}

		namespace architect {
			class ArchitectStartupConfiguration extends com.wikitude.common.startup.StartupConfiguration {
				public static class: java.lang.Class<com.wikitude.architect.ArchitectStartupConfiguration>;
				public static ORIGIN_PHONEGAP: string;
				public static ORIGIN_TITANIUM: string;
				public static ORIGIN_XAMARIN: string;
				public static ORIGIN_FLUTTER: string;
				public static ORIGIN_DEFAULT: string;
				public getDefaultOrigin(): string;
				public isValidOrigin(): boolean;
				public getFeatures(): number;
				public constructor();
				public setFeatures(param0: number): void;
			}
			namespace ArchitectStartupConfiguration {
				class Features {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectStartupConfiguration.Features>;
					/**
					 * Constructs a new instance of the com.wikitude.architect.ArchitectStartupConfiguration$Features interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static ImageTracking: number;
					public static InstantTracking: number;
					public static Geo: number;
					public static ObjectTracking: number;
				}
			}
		}

		namespace architect {
			class ArchitectView {
				public static class: java.lang.Class<com.wikitude.architect.ArchitectView>;
				public unregisterSensorAccuracyChangeListener(param0: com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onPause(): void;
				public captureScreen(param0: number, param1: java.io.FileOutputStream): void;
				public getArchitectJavaScriptInterfaceListenerSet(): java.util.Set<com.wikitude.architect.ArchitectJavaScriptInterfaceListener>;
				public static isDeviceSupporting(param0: globalAndroid.content.Context, param1: java.util.EnumSet<com.wikitude.common.devicesupport.Feature>): com.wikitude.common.CallStatus;
				public callJavascript(param0: string): void;
				public static getSupportedFeaturesForDevice(param0: globalAndroid.content.Context): number;
				public removeArchitectJavaScriptInterfaceListener(param0: com.wikitude.architect.ArchitectJavaScriptInterfaceListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public static getSDKBuildInformation(): com.wikitude.common.util.SDKBuildInformation;
				public static getSDKVersion(): string;
				public static getCacheDirectoryAbsoluteFilePath(param0: globalAndroid.content.Context): string;
				public addArchitectJavaScriptInterfaceListener(param0: com.wikitude.architect.ArchitectJavaScriptInterfaceListener): void;
				public setCullingDistance(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onResume(): void;
				public onLowMemory(): void;
				public static isDeviceSupported(param0: globalAndroid.content.Context): boolean;
				public onPostCreate(): void;
				public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
				public onCreate(param0: com.wikitude.architect.ArchitectStartupConfiguration): void;
				public captureScreen(param0: number, param1: com.wikitude.architect.ArchitectView.CaptureScreenCallback): void;
				public registerNativePlugins(param0: string, param1: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public registerWorldLoadedListener(param0: com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener): void;
				public load(param0: string): void;
				public static isDeviceSupported(param0: globalAndroid.content.Context, param1: number): com.wikitude.tools.device.features.MissingDeviceFeatures;
				public registerSensorAccuracyChangeListener(param0: com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener): void;
				public static deleteRootCacheDirectory(param0: globalAndroid.content.Context): void;
				public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.ErrorCallback): void;
				public onDestroy(): void;
				public static getPermissionManager(): com.wikitude.common.permission.PermissionManager;
				public setLocation(param0: number, param1: number, param2: number, param3: number): void;
				public setLocation(param0: number, param1: number, param2: number): void;
				public clearCache(): void;
				public getCullingDistance(): number;
				public registerNativePlugins(param0: string, param1: com.wikitude.common.ErrorCallback): void;
			}
			namespace ArchitectView {
				abstract class ArchitectInitializeException {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.ArchitectInitializeException>;
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
				}
				class ArchitectWorldLoadedListener {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener>;
					/**
					 * Constructs a new instance of the com.wikitude.architect.ArchitectView$ArchitectWorldLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						worldWasLoaded(param0: string): void;
						worldLoadFailed(param0: number, param1: string, param2: string): void;
					});
					public constructor();
					public worldWasLoaded(param0: string): void;
					public worldLoadFailed(param0: number, param1: string, param2: string): void;
				}
				class CamNotAccessibleException extends com.wikitude.architect.ArchitectView.ArchitectInitializeException {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.CamNotAccessibleException>;
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
				}
				class CaptureScreenCallback {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.CaptureScreenCallback>;
					/**
					 * Constructs a new instance of the com.wikitude.architect.ArchitectView$CaptureScreenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScreenCaptured(param0: globalAndroid.graphics.Bitmap): void;
					});
					public constructor();
					public static CAPTURE_MODE_CAM_AND_WEBVIEW: number;
					public static CAPTURE_MODE_CAM: number;
					public onScreenCaptured(param0: globalAndroid.graphics.Bitmap): void;
				}
				class LibraryLoadFailedException extends com.wikitude.architect.ArchitectView.ArchitectInitializeException {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.LibraryLoadFailedException>;
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
				}
				class MissingFeatureException extends com.wikitude.architect.ArchitectView.ArchitectInitializeException {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.MissingFeatureException>;
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
				}
				class SensorAccuracyChangeListener {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener>;
					/**
					 * Constructs a new instance of the com.wikitude.architect.ArchitectView$SensorAccuracyChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompassAccuracyChanged(param0: number): void;
					});
					public constructor();
					public onCompassAccuracyChanged(param0: number): void;
				}
				class a {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.a>;
					public constructor(param0: com.wikitude.architect.ArchitectView);
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				class b {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.b>;
					public static a: com.wikitude.architect.ArchitectView.b;
					public static b: com.wikitude.architect.ArchitectView.b;
					public static c: com.wikitude.architect.ArchitectView.b;
					public static values(): native.Array<com.wikitude.architect.ArchitectView.b>;
					public static valueOf(param0: string): com.wikitude.architect.ArchitectView.b;
				}
				class c {
					public static class: java.lang.Class<com.wikitude.architect.ArchitectView.c>;
					public static a: number;
					public static b: number;
					public static c: number;
					public static d: number;
					public static e: number;
					public static f: number;
					public static g: number;
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class BenchmarkInterface extends com.wikitude.architect.b {
				public static class: java.lang.Class<com.wikitude.architect.BenchmarkInterface>;
				public setOrientationHeading(param0: number): void;
				public startFpsMeasure(): void;
				public setOrientationAngles(param0: number, param1: number, param2: number): void;
				public getUsedMainMemory(): number;
				public stopFpsMeasure(param0: string): void;
				public getUsedTextureMemory(): number;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class BrowserActivity {
				public static class: java.lang.Class<com.wikitude.architect.BrowserActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onDestroy(): void;
				public constructor();
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class CallbackHandler implements com.wikitude.architect.a.a.a, com.wikitude.architect.i, com.wikitude.architect.j, com.wikitude.architect.l {
				public static class: java.lang.Class<com.wikitude.architect.CallbackHandler>;
				public isActivityFinishing(): boolean;
				public destroyHtmlRenderer(param0: number): void;
				public soundPlayLoopCallback(param0: string, param1: number): number;
				public constructor(param0: globalAndroid.app.Activity, param1: com.wikitude.architect.ArchitectView);
				public createTextBitmapAsByteArray(param0: string, param1: com.wikitude.architect.StyleOptionsFont, param2: java.nio.ByteBuffer): number;
				public setHtmlRendererHidden(param0: number): void;
				public b(param0: string): void;
				public a(param0: number, param1: string): void;
				public a(param0: string, param1: number, param2: string): void;
				public b(param0: string, param1: number, param2: number): void;
				public createHtmlRendererWithUri(param0: number, param1: string, param2: number, param3: number, param4: string): void;
				public resumeVideoCallback(param0: number): void;
				public callHtmlRendererSetBackgroundColor(param0: number, param1: string): void;
				public soundPlayCallback(param0: string): number;
				public soundLoadUrlCallback(param0: string): void;
				public getUsedMainMemory(): number;
				public stopVideoCallback(param0: number): void;
				public b(param0: number): void;
				public a(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public getGlobalSceneScalingFactor(): number;
				public a(param0: string, param1: number, param2: number): void;
				public soundResumeCallback(param0: number): void;
				public openInBrowser(param0: string, param1: boolean): void;
				public evaluateJsOnHtmlRenderer(param0: number, param1: string): void;
				public updateHtmlRendererTransformation(param0: number, param1: native.Array<number>): void;
				public destroyVideoCallback(param0: number): void;
				public createVideoTexture(param0: number, param1: string): void;
				public soundPauseCallback(param0: number): void;
				public soundStopCallback(param0: number): void;
				public soundDestroyCallback(param0: string): void;
				public onCalibrationNeeded(param0: boolean): void;
				public callJavaScript(param0: string): void;
				public playVideoCallback(param0: number, param1: number): void;
				public pauseVideoCallback(param0: number): void;
				public forwardJSONObject(param0: string): void;
				public startVideoPlayerCallback(param0: string): void;
				public soundInstantPlayLoopCallback(param0: string, param1: number): number;
				public injectJavaScript(param0: string): void;
				public a(param0: string): void;
				public soundInstantPlayCallback(param0: string): number;
				public createHtmlRendererWithHtml(param0: number, param1: string, param2: number, param3: number, param4: string): void;
				public onCalibrationExit(param0: boolean): void;
				public c(param0: number): void;
				public setHtmlRendererViewportSize(param0: number, param1: number, param2: number): void;
				public a(param0: number): void;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class DebugInterface extends com.wikitude.architect.b {
				public static class: java.lang.Class<com.wikitude.architect.DebugInterface>;
				public printSnapshot(): void;
				public printObject(param0: number): void;
				public printInterface(param0: string): void;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class GameplayInterface {
				public static class: java.lang.Class<com.wikitude.architect.GameplayInterface>;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class HtmlDrawableInterface extends com.wikitude.architect.b {
				public static class: java.lang.Class<com.wikitude.architect.HtmlDrawableInterface>;
				public constructor(param0: globalAndroid.content.Context, param1: com.wikitude.architect.d);
				public updateHtmlDrawableTexture(param0: number, param1: globalAndroid.graphics.Bitmap, param2: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public errorLoading(param0: number, param1: string): void;
				public finishedLoading(param0: number): void;
				public onDocumentLocationChange(param0: number, param1: string): boolean;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class PlatformBridge extends com.wikitude.architect.b implements com.wikitude.architect.k {
				public static class: java.lang.Class<com.wikitude.architect.PlatformBridge>;
				public constructor(param0: globalAndroid.content.Context, param1: com.wikitude.architect.d);
				public callSync(param0: string): string;
				public callAsyncImpl(param0: string): void;
				public destroy(): void;
				public callSyncImpl(param0: string): string;
				public createNative(): number;
				public destroyNative(param0: number): void;
				public resume(): void;
				public constructor(param0: globalAndroid.content.Context);
				public callAsync(param0: string): void;
				public pause(): void;
			}
			namespace PlatformBridge {
				class a {
					public static class: java.lang.Class<com.wikitude.architect.PlatformBridge.a>;
					public constructor(param0: com.wikitude.architect.PlatformBridge, param1: string);
					public enqueue(param0: string): void;
					public run(): void;
					public callSync(param0: string): string;
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class StyleOptionsFont {
				public static class: java.lang.Class<com.wikitude.architect.StyleOptionsFont>;
				public getBackgroundColor(): number;
				public constructor(param0: number, param1: number, param2: number);
				public getFontColor(): number;
				public getFontStyle(): number;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			class a {
				public static class: java.lang.Class<com.wikitude.architect.a>;
				public static b(param0: globalAndroid.content.Context): boolean;
				public static a(param0: string, param1: com.wikitude.architect.StyleOptionsFont, param2: java.nio.ByteBuffer): number;
				public static a(param0: globalAndroid.content.Context): java.io.InputStream;
				public static a(param0: java.net.URL): boolean;
				public constructor();
				public static a(param0: string, param1: globalAndroid.content.Context): string;
				public static a(param0: globalAndroid.app.Activity, param1: com.wikitude.architect.a.a.b, param2: number): void;
			}
		}
	}

	namespace wikitude {
		namespace architect {
			namespace a {
				namespace a {
					class a {
						public static class: java.lang.Class<com.wikitude.architect.a.a.a>;
						/**
						 * Constructs a new instance of the com.wikitude.architect.a.a.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: number, param1: string): void;
							a(param0: number): void;
							b(param0: number): void;
							c(param0: number): void;
							a(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
						});
						public constructor();
						public a(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
						public a(param0: number, param1: string): void;
						public c(param0: number): void;
						public a(param0: number): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			namespace a {
				namespace a {
					class b {
						public static class: java.lang.Class<com.wikitude.architect.a.a.b>;
						/**
						 * Constructs a new instance of the com.wikitude.architect.a.a.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): void;
							b(): void;
							c(): void;
							d(): void;
							e(): boolean;
							f(): boolean;
							g(): void;
							h(): boolean;
							i(): void;
							a(param0: globalAndroid.app.Activity, param1: globalAndroid.media.MediaPlayer): void;
							j(): void;
							k(): number;
							l(): number;
							m(): void;
							n(): number;
							o(): boolean;
							p(): number;
							a(param0: number): void;
							q(): boolean;
							r(): string;
							s(): boolean;
							b(param0: number): void;
							a(param0: boolean): void;
							t(): any;
							u(): void;
							v(): boolean;
							w(): boolean;
							x(): number;
							c(param0: number): void;
							y(): boolean;
							z(): void;
							A(): boolean;
						});
						public constructor();
						public v(): boolean;
						public w(): boolean;
						public i(): void;
						public p(): number;
						public c(): void;
						public t(): any;
						public r(): string;
						public o(): boolean;
						public A(): boolean;
						public a(): void;
						public x(): number;
						public s(): boolean;
						public l(): number;
						public q(): boolean;
						public b(param0: number): void;
						public h(): boolean;
						public g(): void;
						public e(): boolean;
						public f(): boolean;
						public d(): void;
						public a(param0: globalAndroid.app.Activity, param1: globalAndroid.media.MediaPlayer): void;
						public k(): number;
						public z(): void;
						public j(): void;
						public n(): number;
						public m(): void;
						public b(): void;
						public c(param0: number): void;
						public y(): boolean;
						public a(param0: number): void;
						public a(param0: boolean): void;
						public u(): void;
					}
					namespace b {
						class a {
							public static class: java.lang.Class<com.wikitude.architect.a.a.b.a>;
							public static a: number;
							public static b: number;
							public static c: number;
							public static d: number;
							public static e: number;
							public static f: number;
							public static g: number;
						}
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			namespace a {
				namespace a {
					class c {
						public static class: java.lang.Class<com.wikitude.architect.a.a.c>;
						/**
						 * Constructs a new instance of the com.wikitude.architect.a.a.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): boolean;
							a(param0: com.wikitude.architect.a.a.b, param1: native.Array<number>): void;
							a(param0: com.wikitude.architect.a.a.b): boolean;
							a(param0: number, param1: string): com.wikitude.architect.a.a.b;
						});
						public constructor();
						public a(param0: com.wikitude.architect.a.a.b): boolean;
						public a(param0: number, param1: string): com.wikitude.architect.a.a.b;
						public a(): boolean;
						public a(param0: com.wikitude.architect.a.a.b, param1: native.Array<number>): void;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			abstract class b {
				public static class: java.lang.Class<com.wikitude.architect.b>;
				public a: globalAndroid.content.Context;
				public constructor(param0: globalAndroid.content.Context);
			}
		}
	}

	namespace wikitude {
		namespace architect {
			namespace b {
				namespace a {
					namespace a {
						class a extends com.wikitude.architect.a.a.c {
							public static class: java.lang.Class<com.wikitude.architect.b.a.a.a>;
							public constructor();
							public a(param0: com.wikitude.architect.a.a.b, param1: native.Array<number>): void;
							public a(param0: com.wikitude.architect.a.a.b): boolean;
							public a(param0: number, param1: string): com.wikitude.architect.a.a.b;
							public a(): boolean;
						}
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace architect {
			namespace b {
				namespace a {
					namespace a {
						class b extends com.wikitude.architect.a.a.b {
							public static class: java.lang.Class<com.wikitude.architect.b.a.a.b>;
							public l(): number;
							public a(param0: number): void;
							public o(): boolean;
							public c(): void;
							public t(): any;
							public a(param0: boolean): void;
							public z(): void;
							public u(): void;
							public v(): boolean;
							public h(): boolean;
							public f(): boolean;
							public w(): boolean;
							public b(): void;
							public p(): number;
							public m(): void;
							public b(param0: number): void;
							public y(): boolean;
							public x(): number;
							public d(): void;
							public g(): void;
							public a(): void;
							public j(): void;
							public e(): boolean;
							public k(): number;
							public r(): string;
							public s(): boolean;
							public n(): number;
							public a(param0: globalAndroid.app.Activity, param1: globalAndroid.media.MediaPlayer): void;
							public c(param0: number): void;
							public A(): boolean;
							public constructor(param0: number, param1: string);
							public i(): void;
							public q(): boolean;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class c extends com.wikitude.common.rendering.internal.f {
				public static class: java.lang.Class<com.wikitude.architect.c>;
				public a(param0: number, param1: number): void;
				public b(): void;
				public c(): void;
				public a(param0: com.wikitude.architect.ArchitectView.CaptureScreenCallback): void;
				public a(): void;
				public a(param0: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			namespace c {
				namespace a {
					class a extends com.wikitude.common.rendering.InternalRendering {
						public static class: java.lang.Class<com.wikitude.architect.c.a.a>;
						public onRenderingApiInstanceCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
						public constructor();
						public a(param0: com.wikitude.common.rendering.internal.f): void;
						public provideRenderExtension(): com.wikitude.common.rendering.RenderExtension;
					}
					namespace a {
						class a extends com.wikitude.common.rendering.RenderExtension {
							public static class: java.lang.Class<com.wikitude.architect.c.a.a.a>;
							public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
							public onPause(): void;
							public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
							public useSeparatedRenderAndLogicUpdates(): void;
							public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
							public onResume(): void;
							public onUpdate(): void;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class d {
				public static class: java.lang.Class<com.wikitude.architect.d>;
				public b(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: com.wikitude.architect.ArchitectView, param2: string);
				public onResume(): void;
				public c(): void;
				public a(param0: string): void;
				public d(param0: string): void;
				public onPause(): void;
				public c(param0: string): void;
				public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
				public a(): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
			namespace d {
				class a {
					public static class: java.lang.Class<com.wikitude.architect.d.a>;
					public static a: com.wikitude.architect.d.a;
					public static b: com.wikitude.architect.d.a;
					public static valueOf(param0: string): com.wikitude.architect.d.a;
					public static values(): native.Array<com.wikitude.architect.d.a>;
				}
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class e {
				public static class: java.lang.Class<com.wikitude.architect.e>;
				public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				public onReceivedError(param0: globalAndroid.webkit.WebView, param1: number, param2: string, param3: string): void;
				public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
				public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
				public a(): void;
				public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
				public constructor();
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class f {
				public static class: java.lang.Class<com.wikitude.architect.f>;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class g {
				public static class: java.lang.Class<com.wikitude.architect.g>;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class h {
				public static class: java.lang.Class<com.wikitude.architect.h>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.widget.FrameLayout, param2: com.wikitude.architect.HtmlDrawableInterface);
			}
			namespace h {
				class a {
					public static class: java.lang.Class<com.wikitude.architect.h.a>;
					public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public destroy(): void;
					public loadUrl(param0: string): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: com.wikitude.architect.HtmlDrawableInterface, param3: number);
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class i {
				public static class: java.lang.Class<com.wikitude.architect.i>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.i interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createTextBitmapAsByteArray(param0: string, param1: com.wikitude.architect.StyleOptionsFont, param2: java.nio.ByteBuffer): number;
					callJavaScript(param0: string): void;
					injectJavaScript(param0: string): void;
					startVideoPlayerCallback(param0: string): void;
					openInBrowser(param0: string, param1: boolean): void;
					soundInstantPlayCallback(param0: string): number;
					soundInstantPlayLoopCallback(param0: string, param1: number): number;
					soundLoadUrlCallback(param0: string): void;
					soundPlayCallback(param0: string): number;
					soundPlayLoopCallback(param0: string, param1: number): number;
					soundDestroyCallback(param0: string): void;
					soundStopCallback(param0: number): void;
					soundResumeCallback(param0: number): void;
					soundPauseCallback(param0: number): void;
					createHtmlRendererWithUri(param0: number, param1: string, param2: number, param3: number, param4: string): void;
					createHtmlRendererWithHtml(param0: number, param1: string, param2: number, param3: number, param4: string): void;
					evaluateJsOnHtmlRenderer(param0: number, param1: string): void;
					destroyHtmlRenderer(param0: number): void;
					callHtmlRendererSetBackgroundColor(param0: number, param1: string): void;
					setHtmlRendererHidden(param0: number): void;
					setHtmlRendererViewportSize(param0: number, param1: number, param2: number): void;
					updateHtmlRendererTransformation(param0: number, param1: native.Array<number>): void;
					isActivityFinishing(): boolean;
					getUsedMainMemory(): number;
					getGlobalSceneScalingFactor(): number;
					createVideoTexture(param0: number, param1: string): void;
					playVideoCallback(param0: number, param1: number): void;
					stopVideoCallback(param0: number): void;
					resumeVideoCallback(param0: number): void;
					pauseVideoCallback(param0: number): void;
					destroyVideoCallback(param0: number): void;
					forwardJSONObject(param0: string): void;
					onCalibrationExit(param0: boolean): void;
					onCalibrationNeeded(param0: boolean): void;
				});
				public constructor();
				public destroyHtmlRenderer(param0: number): void;
				public isActivityFinishing(): boolean;
				public soundPlayLoopCallback(param0: string, param1: number): number;
				public createTextBitmapAsByteArray(param0: string, param1: com.wikitude.architect.StyleOptionsFont, param2: java.nio.ByteBuffer): number;
				public setHtmlRendererHidden(param0: number): void;
				public createHtmlRendererWithUri(param0: number, param1: string, param2: number, param3: number, param4: string): void;
				public resumeVideoCallback(param0: number): void;
				public callHtmlRendererSetBackgroundColor(param0: number, param1: string): void;
				public soundPlayCallback(param0: string): number;
				public soundLoadUrlCallback(param0: string): void;
				public getUsedMainMemory(): number;
				public stopVideoCallback(param0: number): void;
				public getGlobalSceneScalingFactor(): number;
				public soundResumeCallback(param0: number): void;
				public openInBrowser(param0: string, param1: boolean): void;
				public evaluateJsOnHtmlRenderer(param0: number, param1: string): void;
				public updateHtmlRendererTransformation(param0: number, param1: native.Array<number>): void;
				public destroyVideoCallback(param0: number): void;
				public createVideoTexture(param0: number, param1: string): void;
				public soundPauseCallback(param0: number): void;
				public soundStopCallback(param0: number): void;
				public soundDestroyCallback(param0: string): void;
				public onCalibrationNeeded(param0: boolean): void;
				public callJavaScript(param0: string): void;
				public playVideoCallback(param0: number, param1: number): void;
				public pauseVideoCallback(param0: number): void;
				public forwardJSONObject(param0: string): void;
				public startVideoPlayerCallback(param0: string): void;
				public soundInstantPlayLoopCallback(param0: string, param1: number): number;
				public injectJavaScript(param0: string): void;
				public soundInstantPlayCallback(param0: string): number;
				public createHtmlRendererWithHtml(param0: number, param1: string, param2: number, param3: number, param4: string): void;
				public onCalibrationExit(param0: boolean): void;
				public setHtmlRendererViewportSize(param0: number, param1: number, param2: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class j {
				public static class: java.lang.Class<com.wikitude.architect.j>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.j interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					b(param0: string): void;
				});
				public constructor();
				public b(param0: string): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class k {
				public static class: java.lang.Class<com.wikitude.architect.k>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.k interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					pause(): void;
					resume(): void;
					destroy(): void;
				});
				public constructor();
				public destroy(): void;
				public resume(): void;
				public pause(): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class l {
				public static class: java.lang.Class<com.wikitude.architect.l>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.l interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: string, param1: number, param2: string): void;
					a(param0: string): void;
					b(param0: string, param1: number, param2: number): void;
					a(param0: string, param1: number, param2: number): void;
				});
				public constructor();
				public a(param0: string, param1: number, param2: number): void;
				public a(param0: string): void;
				public a(param0: string, param1: number, param2: string): void;
				public b(param0: string, param1: number, param2: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class m extends com.wikitude.architect.k {
				public static class: java.lang.Class<com.wikitude.architect.m>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.m interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: string): number;
					b(param0: string): number;
					a(param0: string, param1: number): number;
					a(param0: number): void;
					b(param0: number): void;
					c(param0: number): void;
					c(param0: string): void;
					d(param0: string): void;
					pause(): void;
					resume(): void;
					destroy(): void;
				});
				public constructor();
				public a(param0: string): number;
				public destroy(): void;
				public resume(): void;
				public d(param0: string): void;
				public c(param0: string): void;
				public pause(): void;
				public a(param0: string, param1: number): number;
				public c(param0: number): void;
				public b(param0: string): number;
				public b(param0: number): void;
				public a(param0: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class n extends com.wikitude.architect.k {
				public static class: java.lang.Class<com.wikitude.architect.n>;
				/**
				 * Constructs a new instance of the com.wikitude.architect.n interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: number, param1: string): void;
					a(param0: number, param1: number): void;
					a(param0: number): void;
					b(param0: number): void;
					c(param0: number): void;
					d(param0: number): void;
					pause(): void;
					resume(): void;
					destroy(): void;
				});
				public constructor();
				public a(param0: number, param1: number): void;
				public destroy(): void;
				public resume(): void;
				public pause(): void;
				public a(param0: number, param1: string): void;
				public d(param0: number): void;
				public c(param0: number): void;
				public b(param0: number): void;
				public a(param0: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class o extends com.wikitude.architect.m {
				public static class: java.lang.Class<com.wikitude.architect.o>;
				public a(param0: string): number;
				public resume(): void;
				public d(param0: string): void;
				public c(param0: string): void;
				public pause(): void;
				public b(param0: string): number;
				public destroy(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: com.wikitude.architect.l, param2: string);
				public a(param0: string, param1: number): number;
				public static e(param0: string): string;
				public c(param0: number): void;
				public b(param0: number): void;
				public a(param0: number): void;
			}
			namespace o {
				abstract class a {
					public static class: java.lang.Class<com.wikitude.architect.o.a>;
					public a(param0: globalAndroid.media.MediaPlayer): void;
				}
			}
		}
	}
	namespace wikitude {
		namespace architect {
			class p implements com.wikitude.architect.n, com.wikitude.common.rendering.internal.f {
				public static class: java.lang.Class<com.wikitude.architect.p>;
				public a(param0: number, param1: number): void;
				public b(): void;
				public resume(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: com.wikitude.architect.a.a.c, param2: com.wikitude.architect.a.a.a);
				public pause(): void;
				public a(param0: number, param1: string): void;
				public destroy(): void;
				public c(): void;
				public a(): void;
				public d(param0: number): void;
				public c(param0: number): void;
				public b(param0: number): void;
				public a(param0: number): void;
			}
		}
	}
	namespace wikitude {
		namespace architect {
			namespace services {
				namespace sensors {
					namespace internal {
						class ArchitectSensorEventHandler {
							public static class: java.lang.Class<com.wikitude.architect.services.sensors.internal.ArchitectSensorEventHandler>;
							public a(): void;
							public b(param0: com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener): void;
							public onCompassAccuracyChanged(param0: number): void;
							public a(param0: com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace architectandlib {
			class a {
				public static class: java.lang.Class<com.wikitude.architectandlib.a>;
				public static a: boolean;
				public static b: string;
				public static c: string;
				public static d: string;
				public static e: number;
				public static f: string;
				public constructor();
			}
		}
	}
	namespace wikitude {
		namespace common {
			class CallStatus {
				public static class: java.lang.Class<com.wikitude.common.CallStatus>;
				/**
				 * Constructs a new instance of the com.wikitude.common.CallStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isSuccess(): boolean;
					getError(): com.wikitude.common.WikitudeError;
				});
				public constructor();
				public getError(): com.wikitude.common.WikitudeError;
				public isSuccess(): boolean;
			}
		}
	}
	namespace wikitude {
		namespace common {
			class CallValue<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.wikitude.common.CallValue<any>>;
				/**
				 * Constructs a new instance of the com.wikitude.common.CallValue<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getValue(): T;
					isSuccess(): boolean;
					getError(): com.wikitude.common.WikitudeError;
				});
				public constructor();
				public getError(): com.wikitude.common.WikitudeError;
				public isSuccess(): boolean;
				public getValue(): T;
			}
		}
	}
	namespace wikitude {
		namespace common {
			class CompletionCallback {
				public static class: java.lang.Class<com.wikitude.common.CompletionCallback>;
				/**
				 * Constructs a new instance of the com.wikitude.common.CompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompletion(): void;
				});
				public constructor();
				public onCompletion(): void;
			}
		}
	}
	namespace wikitude {
		namespace common {
			class ErrorCallback {
				public static class: java.lang.Class<com.wikitude.common.ErrorCallback>;
				/**
				 * Constructs a new instance of the com.wikitude.common.ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(param0: com.wikitude.common.WikitudeError): void;
				});
				public constructor();
				public onError(param0: com.wikitude.common.WikitudeError): void;
			}
		}
	}
	namespace wikitude {
		namespace common {
			class WikitudeError {
				public static class: java.lang.Class<com.wikitude.common.WikitudeError>;
				/**
				 * Constructs a new instance of the com.wikitude.common.WikitudeError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCode(): number;
					getDomain(): string;
					getMessage(): string;
					getDescription(): string;
					getFormattedDescription(): string;
					getUnderlyingError(): com.wikitude.common.WikitudeError;
				});
				public constructor();
				public getCode(): number;
				public getUnderlyingError(): com.wikitude.common.WikitudeError;
				public getDomain(): string;
				public getDescription(): string;
				public getMessage(): string;
				public getFormattedDescription(): string;
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace a {
				namespace a {
					class a {
						public static class: java.lang.Class<com.wikitude.common.a.a.a>;
						/**
						 * Constructs a new instance of the com.wikitude.common.a.a.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace a {
				namespace a {
					class b {
						public static class: java.lang.Class<com.wikitude.common.a.a.b>;
						/**
						 * Constructs a new instance of the com.wikitude.common.a.a.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace arcore {
				namespace internal {
					class NativeArCoreInterface extends com.wikitude.common.arcore.internal.c {
						public static class: java.lang.Class<com.wikitude.common.arcore.internal.NativeArCoreInterface>;
						public static isSupportedCallback(param0: number): void;
						public a(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: java.nio.ByteBuffer, param5: java.nio.ByteBuffer, param6: number, param7: number, param8: number, param9: native.Array<number>, param10: native.Array<number>): void;
						public a(param0: java.nio.FloatBuffer, param1: number, param2: native.Array<number>): void;
						public a(param0: com.wikitude.common.CallStatus): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace arcore {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.arcore.internal.a>;
						public static a: com.wikitude.common.arcore.internal.a;
						public static b: com.wikitude.common.arcore.internal.a;
						public static c: string;
						public static values(): native.Array<com.wikitude.common.arcore.internal.a>;
						public static valueOf(param0: string): com.wikitude.common.arcore.internal.a;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace arcore {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.arcore.internal.b>;
					}
					namespace b {
						class a {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.b.a>;
							/**
							 * Constructs a new instance of the com.wikitude.common.arcore.internal.b$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: number): void;
							});
							public constructor();
							public a(param0: number): void;
						}
						class b {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.b.b>;
							/**
							 * Constructs a new instance of the com.wikitude.common.arcore.internal.b$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.content.Context, param1: com.wikitude.common.arcore.internal.b.a): void;
								a(param0: globalAndroid.content.Context): number;
							});
							public constructor();
							public a(param0: globalAndroid.content.Context): number;
							public a(param0: globalAndroid.content.Context, param1: com.wikitude.common.arcore.internal.b.a): void;
						}
						class c extends com.wikitude.common.arcore.internal.b.b {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.b.c>;
							public a(param0: globalAndroid.content.Context): number;
							public a(param0: globalAndroid.content.Context, param1: com.wikitude.common.arcore.internal.b.a): void;
						}
						class d extends com.wikitude.common.arcore.internal.b.b {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.b.d>;
							public a(param0: globalAndroid.content.Context): number;
							public a(param0: globalAndroid.content.Context, param1: com.wikitude.common.arcore.internal.b.a): void;
						}
						class e extends com.wikitude.common.arcore.internal.b.b {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.b.e>;
							public a(param0: globalAndroid.content.Context): number;
							public a(param0: globalAndroid.content.Context, param1: com.wikitude.common.arcore.internal.b.a): void;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace arcore {
				namespace internal {
					class c {
						public static class: java.lang.Class<com.wikitude.common.arcore.internal.c>;
						/**
						 * Constructs a new instance of the com.wikitude.common.arcore.internal.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: java.nio.FloatBuffer, param1: number, param2: native.Array<number>): void;
							a(param0: number): void;
							a(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: java.nio.ByteBuffer, param5: java.nio.ByteBuffer, param6: number, param7: number, param8: number, param9: native.Array<number>, param10: native.Array<number>): void;
							a(param0: com.wikitude.common.CallStatus): void;
						});
						public constructor();
						public a(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: java.nio.ByteBuffer, param5: java.nio.ByteBuffer, param6: number, param7: number, param8: number, param9: native.Array<number>, param10: native.Array<number>): void;
						public a(param0: java.nio.FloatBuffer, param1: number, param2: native.Array<number>): void;
						public a(param0: com.wikitude.common.CallStatus): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace arcore {
				namespace internal {
					class d {
						public static class: java.lang.Class<com.wikitude.common.arcore.internal.d>;
					}
					namespace d {
						class a {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.d.a>;
							/**
							 * Constructs a new instance of the com.wikitude.common.arcore.internal.d$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.google.ar.core.HitResult): void;
							});
							public constructor();
							public a(param0: com.google.ar.core.HitResult): void;
						}
						class b {
							public static class: java.lang.Class<com.wikitude.common.arcore.internal.d.b>;
							public static a: number;
							public static b: number;
							public static c: number;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace b {
				namespace a {
					class a {
						public static class: java.lang.Class<com.wikitude.common.b.a.a>;
						public static a(): void;
						public static a(param0: string): void;
						public static a(param0: any): void;
					}
					namespace a {
						class a {
							public static class: java.lang.Class<com.wikitude.common.b.a.a.a>;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace b {
				namespace a {
					class b {
						public static class: java.lang.Class<com.wikitude.common.b.a.b>;
						public static a(): void;
						public constructor();
						public static c(param0: string, param1: string): void;
						public static a(param0: string, param1: string): void;
						public static b(param0: string, param1: string): void;
						public static a(param0: string, param1: string, param2: java.lang.Throwable): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				class CameraSettings {
					public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings>;
				}
				namespace CameraSettings {
					class Camera2SupportLevel {
						public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings.Camera2SupportLevel>;
						public static LIMITED: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
						public static FULL: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
						public static LEGACY: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
						public static LEVEL_3: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
						public static valueOf(param0: string): com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
						public static values(): native.Array<com.wikitude.common.camera.CameraSettings.Camera2SupportLevel>;
					}
					class CameraFocusMode {
						public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
						public static ONCE: com.wikitude.common.camera.CameraSettings.CameraFocusMode;
						public static CONTINUOUS: com.wikitude.common.camera.CameraSettings.CameraFocusMode;
						public static OFF: com.wikitude.common.camera.CameraSettings.CameraFocusMode;
						public static values(): native.Array<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
						public static valueOf(param0: string): com.wikitude.common.camera.CameraSettings.CameraFocusMode;
					}
					class CameraPosition {
						public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings.CameraPosition>;
						public static BACK: com.wikitude.common.camera.CameraSettings.CameraPosition;
						public static FRONT: com.wikitude.common.camera.CameraSettings.CameraPosition;
						public static DEFAULT: com.wikitude.common.camera.CameraSettings.CameraPosition;
						public static values(): native.Array<com.wikitude.common.camera.CameraSettings.CameraPosition>;
						public static valueOf(param0: string): com.wikitude.common.camera.CameraSettings.CameraPosition;
					}
					class CameraResolution {
						public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings.CameraResolution>;
						public static SD_640x480: com.wikitude.common.camera.CameraSettings.CameraResolution;
						public static HD_1280x720: com.wikitude.common.camera.CameraSettings.CameraResolution;
						public static FULL_HD_1920x1080: com.wikitude.common.camera.CameraSettings.CameraResolution;
						public static AUTO: com.wikitude.common.camera.CameraSettings.CameraResolution;
						public static valueOf(param0: string): com.wikitude.common.camera.CameraSettings.CameraResolution;
						public static values(): native.Array<com.wikitude.common.camera.CameraSettings.CameraResolution>;
					}
					class TorchMode {
						public static class: java.lang.Class<com.wikitude.common.camera.CameraSettings.TorchMode>;
						public static OFF: com.wikitude.common.camera.CameraSettings.TorchMode;
						public static ON: com.wikitude.common.camera.CameraSettings.TorchMode;
						public static values(): native.Array<com.wikitude.common.camera.CameraSettings.TorchMode>;
						public static valueOf(param0: string): com.wikitude.common.camera.CameraSettings.TorchMode;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class AndroidCamera {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.AndroidCamera>;
						public constructor(param0: string, param1: com.wikitude.common.camera.CameraSettings.CameraPosition, param2: com.wikitude.common.camera.CameraSettings.CameraResolution, param3: com.wikitude.common.camera.CameraSettings.CameraFocusMode);
						public constructor(param0: string, param1: com.wikitude.common.camera.CameraSettings.CameraPosition, param2: com.wikitude.common.camera.CameraSettings.CameraResolution, param3: com.wikitude.common.camera.CameraSettings.CameraFocusMode, param4: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel);
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class NativeCameraInterface extends com.wikitude.common.camera.internal.b {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.NativeCameraInterface>;
						public doStart(): void;
						public a(param0: number, param1: native.Array<number>, param2: number): void;
						public a(param0: number, param1: number): void;
						public a(): void;
						public a(param0: com.wikitude.common.camera.internal.a, param1: string): void;
						public doStop(): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public b(): void;
						public a(param0: number, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number): void;
						public a(param0: number): void;
						public a(param0: com.wikitude.common.camera.CameraSettings.CameraPosition): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.a>;
						public static a: com.wikitude.common.camera.internal.a;
						public static b: com.wikitude.common.camera.internal.a;
						public static c: com.wikitude.common.camera.internal.a;
						public static d: com.wikitude.common.camera.internal.a;
						public static e: com.wikitude.common.camera.internal.a;
						public static f: com.wikitude.common.camera.internal.a;
						public static g: com.wikitude.common.camera.internal.a;
						public static h: com.wikitude.common.camera.internal.a;
						public static i: com.wikitude.common.camera.internal.a;
						public static j: string;
						public static valueOf(param0: string): com.wikitude.common.camera.internal.a;
						public static values(): native.Array<com.wikitude.common.camera.internal.a>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.b>;
						/**
						 * Constructs a new instance of the com.wikitude.common.camera.internal.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: number, param1: native.Array<number>, param2: number): void;
							a(param0: number, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number): void;
							a(param0: number, param1: number): void;
							a(param0: number): void;
							a(param0: com.wikitude.common.camera.CameraSettings.CameraPosition): void;
							a(param0: number): void;
							b(param0: number): void;
							a(param0: com.wikitude.common.camera.internal.a, param1: string): void;
							a(): void;
							b(): void;
						});
						public constructor();
						public a(param0: number, param1: native.Array<number>, param2: number): void;
						public a(param0: number, param1: number): void;
						public a(): void;
						public a(param0: com.wikitude.common.camera.internal.a, param1: string): void;
						public b(): void;
						public a(param0: number, param1: java.nio.ByteBuffer, param2: java.nio.ByteBuffer, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number): void;
						public a(param0: number): void;
						public a(param0: com.wikitude.common.camera.CameraSettings.CameraPosition): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class c {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.c>;
						/**
						 * Constructs a new instance of the com.wikitude.common.camera.internal.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraPosition>>;
							b(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraFocusMode>>;
							a(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
							b(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
							c(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
							d(): com.wikitude.common.CallStatus;
							a(param0: number): com.wikitude.common.CallStatus;
							e(): com.wikitude.common.CallValue<java.lang.Float>;
							f(): com.wikitude.common.CallStatus;
							a(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
							g(): com.wikitude.common.CallStatus;
							b(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
							b(param0: number): com.wikitude.common.CallStatus;
							h(): com.wikitude.common.CallValue<java.lang.Float>;
							c(param0: number): com.wikitude.common.CallStatus;
							i(): com.wikitude.common.CallValue<java.lang.Float>;
							a(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
							b(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
							j(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.TorchMode>;
						});
						public constructor();
						public a(param0: number): com.wikitude.common.CallStatus;
						public e(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public a(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraPosition>>;
						public b(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
						public a(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public c(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
						public j(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.TorchMode>;
						public h(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public a(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public b(param0: number): com.wikitude.common.CallStatus;
						public f(): com.wikitude.common.CallStatus;
						public g(): com.wikitude.common.CallStatus;
						public b(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraFocusMode>>;
						public d(): com.wikitude.common.CallStatus;
						public c(param0: number): com.wikitude.common.CallStatus;
						public i(): com.wikitude.common.CallValue<java.lang.Float>;
						public a(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class d {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.d>;
						/**
						 * Constructs a new instance of the com.wikitude.common.camera.internal.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							k(): void;
							l(): void;
							a(param0: com.wikitude.common.camera.internal.AndroidCamera): void;
							m(): com.wikitude.common.camera.internal.AndroidCamera;
						});
						public constructor();
						public k(): void;
						public l(): void;
						public m(): com.wikitude.common.camera.internal.AndroidCamera;
						public a(param0: com.wikitude.common.camera.internal.AndroidCamera): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class e {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.e>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class f {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.f>;
						public constructor();
						public static a(param0: globalAndroid.hardware.camera2.CameraCharacteristics, param1: com.wikitude.common.util.internal.Size, param2: number): number;
						public static a(param0: globalAndroid.hardware.camera2.CameraCharacteristics, param1: com.wikitude.common.util.internal.Size): number;
						public static a(param0: globalAndroid.content.Context): com.wikitude.common.CallStatus;
						public static a(param0: number, param1: number): number;
						public static a(param0: com.wikitude.common.util.internal.Size, param1: com.wikitude.common.util.internal.Size, param2: com.wikitude.common.util.internal.Size): com.wikitude.common.util.internal.Size;
						public static a(param0: number, param1: number, param2: com.wikitude.common.util.internal.Size, param3: com.wikitude.common.util.internal.Size): number;
					}
					namespace f {
						class a {
							public static class: java.lang.Class<com.wikitude.common.camera.internal.f.a>;
							/**
							 * Constructs a new instance of the com.wikitude.common.camera.internal.f$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class g implements com.wikitude.common.camera.internal.c, com.wikitude.common.camera.internal.d {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.g>;
						public a(param0: number): com.wikitude.common.CallStatus;
						public e(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public l(): void;
						public a(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraPosition>>;
						public b(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
						public a(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public m(): com.wikitude.common.camera.internal.AndroidCamera;
						public a(param0: com.wikitude.common.camera.internal.AndroidCamera): void;
						public c(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
						public j(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.TorchMode>;
						public onError(param0: number, param1: globalAndroid.hardware.Camera): void;
						public h(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public k(): void;
						public a(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public b(param0: number): com.wikitude.common.CallStatus;
						public f(): com.wikitude.common.CallStatus;
						public g(): com.wikitude.common.CallStatus;
						public b(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraFocusMode>>;
						public d(): com.wikitude.common.CallStatus;
						public c(param0: number): com.wikitude.common.CallStatus;
						public i(): com.wikitude.common.CallValue<java.lang.Float>;
						public a(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class h implements com.wikitude.common.camera.internal.c, com.wikitude.common.camera.internal.d {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.h>;
						public a(param0: number): com.wikitude.common.CallStatus;
						public e(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public l(): void;
						public a(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraPosition>>;
						public b(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
						public a(param0: com.wikitude.common.camera.CameraSettings.TorchMode): com.wikitude.common.CallStatus;
						public m(): com.wikitude.common.camera.internal.AndroidCamera;
						public a(param0: com.wikitude.common.camera.internal.AndroidCamera): void;
						public c(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.CameraFocusMode>;
						public j(): com.wikitude.common.CallValue<com.wikitude.common.camera.CameraSettings.TorchMode>;
						public h(): com.wikitude.common.CallValue<java.lang.Float>;
						public b(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public k(): void;
						public a(param0: globalAndroid.graphics.PointF): com.wikitude.common.CallStatus;
						public b(param0: number): com.wikitude.common.CallStatus;
						public f(): com.wikitude.common.CallStatus;
						public g(): com.wikitude.common.CallStatus;
						public b(): com.wikitude.common.CallValue<java.util.List<com.wikitude.common.camera.CameraSettings.CameraFocusMode>>;
						public d(): com.wikitude.common.CallStatus;
						public c(param0: number): com.wikitude.common.CallStatus;
						public i(): com.wikitude.common.CallValue<java.lang.Float>;
						public a(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): com.wikitude.common.CallStatus;
					}
					namespace h {
						class a {
							public static class: java.lang.Class<com.wikitude.common.camera.internal.h.a>;
							public static a: number;
							public static b: number;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace camera {
				namespace internal {
					class i {
						public static class: java.lang.Class<com.wikitude.common.camera.internal.i>;
						public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
					}
					namespace i {
						class a {
							public static class: java.lang.Class<com.wikitude.common.camera.internal.i.a>;
							/**
							 * Constructs a new instance of the com.wikitude.common.camera.internal.i$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.wikitude.common.camera.internal.a, param1: string): void;
							});
							public constructor();
							public a(param0: com.wikitude.common.camera.internal.a, param1: string): void;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class NativeDeviceMotionInterface extends com.wikitude.common.devicemotion.internal.f {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.NativeDeviceMotionInterface>;
						public a(param0: com.wikitude.common.devicemotion.internal.g, param1: native.Array<number>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.a>;
						public static a: com.wikitude.common.devicemotion.internal.a;
						public static b: com.wikitude.common.devicemotion.internal.a;
						public static c: com.wikitude.common.devicemotion.internal.a;
						public static d: com.wikitude.common.devicemotion.internal.a;
						public static e: com.wikitude.common.devicemotion.internal.a;
						public static f: string;
						public static values(): native.Array<com.wikitude.common.devicemotion.internal.a>;
						public static valueOf(param0: string): com.wikitude.common.devicemotion.internal.a;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class b extends com.wikitude.common.devicemotion.internal.e {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.b>;
						public d(): boolean;
						public c(): void;
						public b(): com.wikitude.common.CallStatus;
						public a(): com.wikitude.common.CallStatus;
						public a(param0: globalAndroid.hardware.SensorManager, param1: com.wikitude.common.devicemotion.internal.f): void;
					}
					namespace b {
						class a {
							public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.b.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class c {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.c>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class d extends com.wikitude.common.devicemotion.internal.e {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.d>;
						public d(): boolean;
						public c(): void;
						public b(): com.wikitude.common.CallStatus;
						public a(): com.wikitude.common.CallStatus;
						public a(param0: globalAndroid.hardware.SensorManager, param1: com.wikitude.common.devicemotion.internal.f): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class e {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.e>;
						/**
						 * Constructs a new instance of the com.wikitude.common.devicemotion.internal.e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: globalAndroid.hardware.SensorManager, param1: com.wikitude.common.devicemotion.internal.f): void;
							a(): com.wikitude.common.CallStatus;
							b(): com.wikitude.common.CallStatus;
							c(): void;
							d(): boolean;
						});
						public constructor();
						public d(): boolean;
						public c(): void;
						public b(): com.wikitude.common.CallStatus;
						public a(): com.wikitude.common.CallStatus;
						public a(param0: globalAndroid.hardware.SensorManager, param1: com.wikitude.common.devicemotion.internal.f): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class f {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.f>;
						/**
						 * Constructs a new instance of the com.wikitude.common.devicemotion.internal.f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.wikitude.common.devicemotion.internal.g, param1: native.Array<number>): void;
							a(param0: number): void;
						});
						public constructor();
						public a(param0: com.wikitude.common.devicemotion.internal.g, param1: native.Array<number>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class g {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.g>;
						public static a: com.wikitude.common.devicemotion.internal.g;
						public static b: com.wikitude.common.devicemotion.internal.g;
						public static values(): native.Array<com.wikitude.common.devicemotion.internal.g>;
						public static valueOf(param0: string): com.wikitude.common.devicemotion.internal.g;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class h {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.h>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicemotion {
				namespace internal {
					class i extends com.wikitude.common.devicemotion.internal.e {
						public static class: java.lang.Class<com.wikitude.common.devicemotion.internal.i>;
						public d(): boolean;
						public c(): void;
						public b(): com.wikitude.common.CallStatus;
						public a(): com.wikitude.common.CallStatus;
						public a(param0: globalAndroid.hardware.SensorManager, param1: com.wikitude.common.devicemotion.internal.f): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicesupport {
				class Feature {
					public static class: java.lang.Class<com.wikitude.common.devicesupport.Feature>;
					public static IMAGE_TRACKING: com.wikitude.common.devicesupport.Feature;
					public static OBJECT_TRACKING: com.wikitude.common.devicesupport.Feature;
					public static INSTANT_TRACKING: com.wikitude.common.devicesupport.Feature;
					public static GEO: com.wikitude.common.devicesupport.Feature;
					public static values(): native.Array<com.wikitude.common.devicesupport.Feature>;
					public static valueOf(param0: string): com.wikitude.common.devicesupport.Feature;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicesupport {
				namespace internal {
					class DeviceSupportManager {
						public static class: java.lang.Class<com.wikitude.common.devicesupport.internal.DeviceSupportManager>;
						public constructor();
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicesupport {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.devicesupport.internal.a>;
						public static a: com.wikitude.common.devicesupport.internal.a;
						public static b: string;
						public static valueOf(param0: string): com.wikitude.common.devicesupport.internal.a;
						public static values(): native.Array<com.wikitude.common.devicesupport.internal.a>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace devicesupport {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.devicesupport.internal.b>;
						/**
						 * Constructs a new instance of the com.wikitude.common.devicesupport.internal.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static a: number;
						public static c: number;
						public static b: number;
						public static d: number;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace internal {
				class CallStatusInternal extends com.wikitude.common.CallStatus {
					public static class: java.lang.Class<com.wikitude.common.internal.CallStatusInternal>;
					public static error(param0: com.wikitude.common.WikitudeError): com.wikitude.common.CallStatus;
					public getError(): com.wikitude.common.WikitudeError;
					public static success(): com.wikitude.common.CallStatus;
					public isSuccess(): boolean;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace internal {
				class CallValueF {
					public static class: java.lang.Class<com.wikitude.common.internal.CallValueF>;
					public static a(param0: number): com.wikitude.common.internal.CallValueF;
					public static a(param0: com.wikitude.common.WikitudeError): com.wikitude.common.internal.CallValueF;
					public getError(): com.wikitude.common.WikitudeError;
					public getValue(): number;
					public isSuccess(): boolean;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace internal {
				class CallValueI {
					public static class: java.lang.Class<com.wikitude.common.internal.CallValueI>;
					public getError(): com.wikitude.common.WikitudeError;
					public getValue(): number;
					public isSuccess(): boolean;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace internal {
				class CallValueInternal<T>  extends com.wikitude.common.CallValue<any> {
					public static class: java.lang.Class<com.wikitude.common.internal.CallValueInternal<any>>;
					public static a(param0: com.wikitude.common.WikitudeError): com.wikitude.common.CallValue<any>;
					public getValue(): any;
					public getError(): com.wikitude.common.WikitudeError;
					public static a(param0: any): com.wikitude.common.CallValue<any>;
					public isSuccess(): boolean;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace internal {
				class WikitudeErrorInternal extends com.wikitude.common.WikitudeError {
					public static class: java.lang.Class<com.wikitude.common.internal.WikitudeErrorInternal>;
					public getUnderlyingError(): com.wikitude.common.WikitudeError;
					public toString(): string;
					public getFormattedDescription(): string;
					public constructor(param0: number, param1: string, param2: string);
					public getMessage(): string;
					public getDomain(): string;
					public getDescription(): string;
					public constructor(param0: number, param1: string, param2: string, param3: com.wikitude.common.WikitudeError);
					public getCode(): number;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace meta {
				namespace internal {
					class NativeMetadataInterface extends com.wikitude.common.meta.internal.b {
						public static class: java.lang.Class<com.wikitude.common.meta.internal.NativeMetadataInterface>;
						public destroyTemporaryDirectory(): void;
						public setRecurringInstantiation(): void;
						public a(param0: number, param1: string): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace meta {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.meta.internal.a>;
						public static a: number;
						public static b: number;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace meta {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.meta.internal.b>;
						/**
						 * Constructs a new instance of the com.wikitude.common.meta.internal.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: number, param1: string): void;
						});
						public constructor();
						public a(param0: number, param1: string): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace meta {
				namespace internal {
					class c {
						public static class: java.lang.Class<com.wikitude.common.meta.internal.c>;
						public static a: string;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace permission {
				class PermissionManager {
					public static class: java.lang.Class<com.wikitude.common.permission.PermissionManager>;
					/**
					 * Constructs a new instance of the com.wikitude.common.permission.PermissionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						checkPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number, param3: com.wikitude.common.permission.PermissionManager.PermissionManagerCallback): void;
						positiveRationaleResult(param0: number, param1: native.Array<string>): void;
						onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					});
					public constructor();
					public static WIKITUDE_PERMISSION_REQUEST: number;
					public checkPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number, param3: com.wikitude.common.permission.PermissionManager.PermissionManagerCallback): void;
					public positiveRationaleResult(param0: number, param1: native.Array<string>): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				}
				namespace PermissionManager {
					class PermissionManagerCallback {
						public static class: java.lang.Class<com.wikitude.common.permission.PermissionManager.PermissionManagerCallback>;
						/**
						 * Constructs a new instance of the com.wikitude.common.permission.PermissionManager$PermissionManagerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							permissionsGranted(param0: number): void;
							permissionsDenied(param0: native.Array<string>): void;
							showPermissionRationale(param0: number, param1: native.Array<string>): void;
						});
						public constructor();
						public permissionsDenied(param0: native.Array<string>): void;
						public permissionsGranted(param0: number): void;
						public showPermissionRationale(param0: number, param1: native.Array<string>): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace permission {
				namespace a {
					class a extends com.wikitude.common.permission.PermissionManager {
						public static class: java.lang.Class<com.wikitude.common.permission.a.a>;
						public constructor();
						public positiveRationaleResult(param0: number, param1: native.Array<string>): void;
						public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
						public checkPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number, param3: com.wikitude.common.permission.PermissionManager.PermissionManagerCallback): void;
					}
					namespace a {
						class a {
							public static class: java.lang.Class<com.wikitude.common.permission.a.a.a>;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace plugins {
				class PluginManager {
					public static class: java.lang.Class<com.wikitude.common.plugins.PluginManager>;
					/**
					 * Constructs a new instance of the com.wikitude.common.plugins.PluginManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerNativePlugins(param0: string, param1: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
						registerNativePlugins(param0: string, param1: com.wikitude.common.ErrorCallback): void;
						registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
						registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.ErrorCallback): void;
					});
					public constructor();
					public registerNativePlugins(param0: string, param1: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
					public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.ErrorCallback): void;
					public registerNativePlugins(param0: string, param1: com.wikitude.common.ErrorCallback): void;
					public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
				}
				namespace PluginManager {
					class PluginErrorCallback {
						public static class: java.lang.Class<com.wikitude.common.plugins.PluginManager.PluginErrorCallback>;
						/**
						 * Constructs a new instance of the com.wikitude.common.plugins.PluginManager$PluginErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRegisterError(param0: number, param1: string): void;
						});
						public constructor();
						public static PLUGIN_ERROR_PLUGIN_WITH_SAME_IDENTIFIER_ALREADY_REGISTERED: number;
						public static PLUGIN_ERROR_IDENTIFIER_INVALID: number;
						public static PLUGIN_ERROR_RENDERING_API_MISMATCH: number;
						public static PLUGIN_ERROR_WRONG_LIFECYCLE_STATE: number;
						public static PLUGIN_ERROR_LOADING_LIBRARY: number;
						public onRegisterError(param0: number, param1: string): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace plugins {
				namespace internal {
					class PluginManagerInternal extends com.wikitude.common.plugins.PluginManager {
						public static class: java.lang.Class<com.wikitude.common.plugins.internal.PluginManagerInternal>;
						public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
						public registerNativePlugins(param0: string, param1: string, param2: com.wikitude.common.ErrorCallback): void;
						public registerNativePlugins(param0: string, param1: com.wikitude.common.plugins.PluginManager.PluginErrorCallback): void;
						public registerNativePlugins(param0: string, param1: com.wikitude.common.ErrorCallback): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace plugins {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.plugins.internal.a>;
						public static a: number;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				class InternalRendering {
					public static class: java.lang.Class<com.wikitude.common.rendering.InternalRendering>;
					/**
					 * Constructs a new instance of the com.wikitude.common.rendering.InternalRendering interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						provideRenderExtension(): com.wikitude.common.rendering.RenderExtension;
						onRenderingApiInstanceCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
					});
					public constructor();
					public onRenderingApiInstanceCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
					public provideRenderExtension(): com.wikitude.common.rendering.RenderExtension;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				class RenderExtension {
					public static class: java.lang.Class<com.wikitude.common.rendering.RenderExtension>;
					/**
					 * Constructs a new instance of the com.wikitude.common.rendering.RenderExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPause(): void;
						onResume(): void;
						useSeparatedRenderAndLogicUpdates(): void;
						onUpdate(): void;
						onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
						onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
					});
					public constructor();
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public onPause(): void;
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public useSeparatedRenderAndLogicUpdates(): void;
					public onResume(): void;
					public onUpdate(): void;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				class RenderSettings {
					public static class: java.lang.Class<com.wikitude.common.rendering.RenderSettings>;
				}
				namespace RenderSettings {
					class ExternalOpenGLESRenderDestination {
						public static class: java.lang.Class<com.wikitude.common.rendering.RenderSettings.ExternalOpenGLESRenderDestination>;
						public static SCREEN: com.wikitude.common.rendering.RenderSettings.ExternalOpenGLESRenderDestination;
						public static TEXTURE: com.wikitude.common.rendering.RenderSettings.ExternalOpenGLESRenderDestination;
						public static values(): native.Array<com.wikitude.common.rendering.RenderSettings.ExternalOpenGLESRenderDestination>;
						public static valueOf(param0: string): com.wikitude.common.rendering.RenderSettings.ExternalOpenGLESRenderDestination;
					}
					class RenderingAPI {
						public static class: java.lang.Class<com.wikitude.common.rendering.RenderSettings.RenderingAPI>;
						public static OPENGL_ES_2: com.wikitude.common.rendering.RenderSettings.RenderingAPI;
						public static OPENGL_ES_3: com.wikitude.common.rendering.RenderSettings.RenderingAPI;
						public static valueOf(param0: string): com.wikitude.common.rendering.RenderSettings.RenderingAPI;
						public static values(): native.Array<com.wikitude.common.rendering.RenderSettings.RenderingAPI>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class InternalOpenGLESRenderingDataSource {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.InternalOpenGLESRenderingDataSource>;
						/**
						 * Constructs a new instance of the com.wikitude.common.rendering.internal.InternalOpenGLESRenderingDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(): void;
							draw(): void;
							surfaceCreated(): void;
							contextCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
						});
						public constructor();
						public surfaceCreated(): void;
						public update(): void;
						public contextCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
						public draw(): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class InternalOpenGLESRenderingSystemInternal extends com.wikitude.common.rendering.internal.d {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.InternalOpenGLESRenderingSystemInternal>;
						public a(): globalAndroid.opengl.GLSurfaceView;
						public nativeGetGLView(param0: number): globalAndroid.opengl.GLSurfaceView;
						public constructor(param0: java.util.List<com.wikitude.common.rendering.RenderSettings.RenderingAPI>, param1: com.wikitude.common.rendering.internal.InternalOpenGLESRenderingDataSource, param2: boolean, param3: boolean);
						public destroyNative(param0: number): void;
						public b(): com.wikitude.common.rendering.RenderSettings.RenderingAPI;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class NativeInternalRenderingInterface extends com.wikitude.common.rendering.internal.f {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.NativeInternalRenderingInterface>;
						public surfaceCreatedNative(param0: number): void;
						public a(param0: number, param1: number): void;
						public a(): void;
						public setRenderingAPINative(param0: number, param1: number): void;
						public c(): void;
						public drawFrameNative(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: native.Array<number>);
						public b(): void;
						public a(param0: number): void;
						public updateNative(param0: number): void;
						public surfaceChangedNative(param0: number, param1: number, param2: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.a>;
						public doFrame(param0: number): void;
					}
					namespace a {
						class a {
							public static class: java.lang.Class<com.wikitude.common.rendering.internal.a.a>;
							/**
							 * Constructs a new instance of the com.wikitude.common.rendering.internal.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
							});
							public constructor();
							public a(): void;
						}
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.b>;
						public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
						public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class c implements com.wikitude.common.rendering.internal.InternalOpenGLESRenderingDataSource, com.wikitude.common.rendering.internal.g {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.c>;
						public surfaceCreated(): void;
						public constructor(param0: com.wikitude.common.rendering.InternalRendering);
						public update(): void;
						public contextCreated(param0: com.wikitude.common.rendering.RenderSettings.RenderingAPI): void;
						public draw(): void;
						public surfaceChanged(param0: number, param1: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class d {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.d>;
						/**
						 * Constructs a new instance of the com.wikitude.common.rendering.internal.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): globalAndroid.opengl.GLSurfaceView;
							b(): com.wikitude.common.rendering.RenderSettings.RenderingAPI;
						});
						public constructor();
						public a(): globalAndroid.opengl.GLSurfaceView;
						public b(): com.wikitude.common.rendering.RenderSettings.RenderingAPI;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class e {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.e>;
						public static a: string;
						public constructor(param0: globalAndroid.content.Context, param1: com.wikitude.common.rendering.internal.b, param2: com.wikitude.common.rendering.internal.f, param3: java.util.List<com.wikitude.common.rendering.RenderSettings.RenderingAPI>);
						public onResume(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class f {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.f>;
						/**
						 * Constructs a new instance of the com.wikitude.common.rendering.internal.f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): void;
							b(): void;
							a(param0: number, param1: number): void;
							c(): void;
							a(param0: number): void;
						});
						public constructor();
						public a(param0: number, param1: number): void;
						public a(): void;
						public c(): void;
						public b(): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace rendering {
				namespace internal {
					class g {
						public static class: java.lang.Class<com.wikitude.common.rendering.internal.g>;
						/**
						 * Constructs a new instance of the com.wikitude.common.rendering.internal.g interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							surfaceChanged(param0: number, param1: number): void;
						});
						public constructor();
						public surfaceChanged(param0: number, param1: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace runtime {
				namespace internal {
					class NativeRuntimeInterface extends com.wikitude.common.runtime.internal.c {
						public static class: java.lang.Class<com.wikitude.common.runtime.internal.NativeRuntimeInterface>;
						public a(param0: number): void;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace runtime {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.runtime.internal.a>;
						public static a: com.wikitude.common.runtime.internal.a;
						public static b: string;
						public static valueOf(param0: string): com.wikitude.common.runtime.internal.a;
						public static values(): native.Array<com.wikitude.common.runtime.internal.a>;
					}
				}
			}
		}
	}
	namespace wikitude {
		namespace common {
			namespace runtime {
				namespace internal {
					class b {
						public static class: java.lang.Class<com.wikitude.common.runtime.internal.b>;
						public constructor(param0: globalAndroid.content.Context, param1: com.wikitude.common.runtime.internal.c);
						public a(): com.wikitude.common.CallStatus;
						public b(): void;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace runtime {
				namespace internal {
					class c {
						public static class: java.lang.Class<com.wikitude.common.runtime.internal.c>;
						/**
						 * Constructs a new instance of the com.wikitude.common.runtime.internal.c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: number): void;
						});
						public constructor();
						public a(param0: number): void;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace startup {
				abstract class StartupConfiguration {
					public static class: java.lang.Class<com.wikitude.common.startup.StartupConfiguration>;
					public b: string;
					public isCamera2Enabled(): boolean;
					public getCameraPosition(): com.wikitude.common.camera.CameraSettings.CameraPosition;
					public getDefaultOrigin(): string;
					public getOrigin(): string;
					public setCamera2Enabled(param0: boolean): void;
					public setLicenseKey(param0: string): void;
					public getCameraManualFocusDistance(): number;
					public getLicenseKey(): string;
					public setMinCamera2SupportLevel(param0: com.wikitude.common.camera.CameraSettings.Camera2SupportLevel): void;
					public getCameraFocusMode(): com.wikitude.common.camera.CameraSettings.CameraFocusMode;
					public getKey(): string;
					public setCameraFocusMode(param0: com.wikitude.common.camera.CameraSettings.CameraFocusMode): void;
					public setCameraManualFocusDistance(param0: number): void;
					public getCameraResolution(): com.wikitude.common.camera.CameraSettings.CameraResolution;
					public getMinCamera2SupportLevel(): com.wikitude.common.camera.CameraSettings.Camera2SupportLevel;
					public setOrigin(param0: string): void;
					public constructor();
					public isValidOrigin(): boolean;
					public setCameraResolution(param0: com.wikitude.common.camera.CameraSettings.CameraResolution): void;
					public setCameraPosition(param0: com.wikitude.common.camera.CameraSettings.CameraPosition): void;
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace util {
				class SDKBuildInformation {
					public static class: java.lang.Class<com.wikitude.common.util.SDKBuildInformation>;
					/**
					 * Constructs a new instance of the com.wikitude.common.util.SDKBuildInformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBuildConfiguration(): string;
						getBuildNumber(): string;
						getBuildDate(): string;
						toJSONString(): string;
					});
					public constructor();
					public getBuildConfiguration(): string;
					public toJSONString(): string;
					public getBuildDate(): string;
					public getBuildNumber(): string;
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace util {
				namespace internal {
					class SDKBuildInformationInternal extends com.wikitude.common.util.SDKBuildInformation {
						public static class: java.lang.Class<com.wikitude.common.util.internal.SDKBuildInformationInternal>;
						public constructor();
						public toJSONString(): string;
						public getBuildConfiguration(): string;
						public getBuildDate(): string;
						public getBuildNumber(): string;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace util {
				namespace internal {
					class Size {
						public static class: java.lang.Class<com.wikitude.common.util.internal.Size>;
						public getWidth(): number;
						public getHeight(): number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace common {
			namespace util {
				namespace internal {
					class a {
						public static class: java.lang.Class<com.wikitude.common.util.internal.a>;
						public a(param0: java.lang.Runnable, param1: number): boolean;
						public a(): boolean;
						public b(): boolean;
						public constructor(param0: string);
						public finalize(): void;
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace tools {
			class a {
				public static class: java.lang.Class<com.wikitude.tools.a>;
				public static a: number;
				public constructor();
			}
		}
	}

	namespace wikitude {
		namespace tools {
			namespace a {
				class a {
					public static class: java.lang.Class<com.wikitude.tools.a.a>;
					public constructor();
					public static a(param0: any, param1: string, param2: native.Array<any>): void;
				}
			}
		}
	}

	namespace wikitude {
		namespace tools {
			namespace activities {
				class MediaPlayerActivity implements com.wikitude.common.runtime.internal.c {
					public static class: java.lang.Class<com.wikitude.tools.activities.MediaPlayerActivity>;
					public static b: string;
					public static c: string;
					public static d: string;
					public static e: string;
					public static f: string;
					public static g: string;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateDialog(param0: number): globalAndroid.app.Dialog;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public onDestroy(): void;
					public onVideoSizeChanged(param0: globalAndroid.media.MediaPlayer, param1: number, param2: number): void;
					public onResume(): void;
					public onCompletion(param0: globalAndroid.media.MediaPlayer): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public a(param0: number): void;
					public onPrepared(param0: globalAndroid.media.MediaPlayer): void;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public constructor();
					public onPause(): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onStop(): void;
					public onError(param0: globalAndroid.media.MediaPlayer, param1: number, param2: number): boolean;
				}
			}
		}
	}

	namespace wikitude {
		namespace tools {
			namespace b {
				class a {
					public static class: java.lang.Class<com.wikitude.tools.b.a>;
					public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onCreate(): void;
					public constructor();
					public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					public onDestroy(): void;
				}
				namespace a {
					class a {
						public static class: java.lang.Class<com.wikitude.tools.b.a.a>;
						public onProviderEnabled(param0: string): void;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
						public run(): void;
						public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
						public onProviderDisabled(param0: string): void;
						public constructor(param0: com.wikitude.tools.b.a, param1: globalAndroid.location.LocationListener);
					}
					class b {
						public static class: java.lang.Class<com.wikitude.tools.b.a.b>;
						public onProviderEnabled(param0: string): void;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
						public a(): number;
						public b(): number;
						public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
						public onProviderDisabled(param0: string): void;
					}
					namespace b {
						class a extends java.util.Comparator<com.wikitude.tools.b.a.d> {
							public static class: java.lang.Class<com.wikitude.tools.b.a.b.a>;
						}
						class b extends java.util.Comparator<com.wikitude.tools.b.a.d> {
							public static class: java.lang.Class<com.wikitude.tools.b.a.b.b>;
						}
					}
					class c {
						public static class: java.lang.Class<com.wikitude.tools.b.a.c>;
						public constructor(param0: com.wikitude.tools.b.a);
					}
					class d {
						public static class: java.lang.Class<com.wikitude.tools.b.a.d>;
						public a: number;
						public b: number;
						public c: globalAndroid.location.LocationListener;
						public d: globalAndroid.location.Location;
						public constructor(param0: com.wikitude.tools.b.a, param1: number, param2: number, param3: globalAndroid.location.LocationListener);
					}
				}
			}
		}
	}

	namespace wikitude {
		namespace tools {
			namespace device {
				namespace features {
					class MissingDeviceFeatures {
						public static class: java.lang.Class<com.wikitude.tools.device.features.MissingDeviceFeatures>;
						public areFeaturesMissing(): boolean;
						public constructor(param0: boolean, param1: string);
						public getMissingFeatureMessage(): string;
					}
				}
			}
		}
	}
}

// Generics information:
// com.wikitude.common.CallValue:1
// com.wikitude.common.internal.CallValueInternal:1

