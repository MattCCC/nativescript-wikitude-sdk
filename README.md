# NativeScript Wikitude SDK

[![npm version](https://badge.fury.io/js/nativescript-wikitude-sdk.svg)](http://badge.fury.io/js/nativescript-wikitude-sdk)

[![NPM](https://nodei.co/npm/nativescript-wikitude-sdk.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-wikitude-sdk/)

Provides NativeScript 8+ access to Wikitude Augmented Reality (9.1.0 on Android and 9.0.0 on iOS).

## Prerequisites / Requirements

### Permissions

Before you can use this plugin you should ensure your application has permissions for Camera and Location, for an easy way to do this on both android and ios, you can make use of this plugin [@spartadigital/nativescript-permissions](https://bitbucket.org/SD-CLIENTPROJ/nativescript-permissions)

### Running the Demo

Basic Vue compatible dmeo is available.

If you want to check something a bit more advanced from [wikitude examples](https://github.com/Wikitude/wikitude-sdk-samples) and place them in [`demo/app/wikitude`](demo/app/WikitudeExamples)... Then update the URL Reference in either the `items.component.ts` for Nativescript-angular or the `main-view-model.ts` in Regular Nativescript.

Then go and grab a Trial License from [Wikitude's Website](http://www.wikitude.com/developer/licenses) and place it in [`demo/app/main-view-model.ts`](demo/app/main-view-model.ts) on line 13

## Installation

to install for your project you can use:

```javascript
tns plugin add nativescript-wikitude-sdk
```

for Nativescript Angular Projects you will need to import the Element in your `app.component.ts`

```javascript
import { Wikitude } from "nativescript-wikitude-sdk";
// ...snip....
registerElement("Wikitude", () => Wikitude);
```

and then in your `ar.component.html` :

```html
<Wikitude
  [url]="WikitudeURL"
  (WorldLoaded)="onWorldLoaded($event)"
  (JSONReceived)="onJSON($event)"
>
</Wikitude>
```

and in your `ar.component.ts`:

```javascript
    import { Wikitude } from 'nativescript-wikitude-sdk';

    // ...snip...

    WikitudeInstance: Wikitude;
    WikitudeURL: string = "~/wikitude_world/index.html";

    onWorldLoaded($event) {
        this.WikitudeInstance = $event.owner; // or you can use Angular's ViewChild
    }

    onJSON($event) {
        console.log(JSON.stringify($event.data));
    }

    // ...snip...
```

and somewhere in your application you will need to define the wikitude license, you can get one from wikitude (free trial license)

```javascript
    (global as any).wikitudeLicense: string = "YOUR_LICENSE_KEY_HERE"
```

And Voila! you have Wikitude AR working in your Nativescript Application!

## Usage

### using your own location provider

by default this plugin has a basic Location Provider, if this does not suit your purpose, you can disable it once it is fully loaded, with the following code :

```javascript

    onWorldLoaded($event) {
        this.WikitudeInstance = $event.owner; // or you can use Angular's ViewChild
        this.WikitudeInstance.disableLocationProvider();
    }

```

Once Disabled, Geo-location based AR will not work unless you provide your own location, this can be achieved with the following

```javascript
this.WikitudeInstance.setLocation({ latitude, longitude, altitude, accuracy });
```

this is useful if you want a single location state.

once you have disabled it you can re-enable it with the following :

```javascript
this.WikitudeInstance.enableLocationProvider();
```

## TODO

- Update to Wikitude 9.5 for Android and iOS
- Plugins API Exposure. Wikitude allows Plugins, built in CPP to be used, and linked using their Plugin's API
- Detecting if Device needs Calibration: Currently being held back by Android causing a crash when i try to listen to this event.
- Camera Events: Could be useful for the Developer to check for the Camera Open, Closed, and any Crashes.
- a better way to set the Wikitude LicenseKey and Required Features.

## API

### Properties

| Property | Default value                                                                      | Description                                                             |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| url      | `""`                                                                               | the URL of the Wikitude "ARWorld"                                       |
| features | `Features.ImageTracking | Features.InstantTracking | ObjectTracking | GeoTracking` | The Required Features you need, this is _experimental_ and may not work |

### Functions

| Function                  | Arguments                                                                     | Description                                                                              |
| ------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| setLocation()             | `{ latitude: number, longitude: number, altitude: number, accuracy: number }` | sets the location in the ARWorld                                                         |
| hasFeature()              | `feature : number`                                                            | checks if your device can support said features (or if your license supports it)         |
| loadUrl()                 | `url: string`                                                                 | loads the URL in the Wikitude WebView                                                    |
| reload()                  |                                                                               | reloads the current Wikitude WebView                                                     |
| clearCache()              |                                                                               | clears the wikitude Cache                                                                |
| toggleFlash()             |                                                                               | Toggles the Devices Flash-light                                                          |
| switchCamera()            |                                                                               | switches the Camera that wikitude uses                                                   |
| captureScreen()           | `captureWebViewContent: boolean`                                              | captures the current view, can also capture the webview content                          |
| disableLocationProvider() |                                                                               | disables the location Provider (you will need to provide your own for GEO/POI's to work) |
| enableLocationProvider()  |                                                                               | enables the location Provider                                                            |

### Events

| Event                | Description                                         | Type                            |
| -------------------- | --------------------------------------------------- | ------------------------------- |
| WorldLoadSuccess     | Fires when the ARWorld Loads Successfully           | `WorldLoadSuccessEventData`     |
| WorldLoadFail        | Fires if an Error Occurs while loading the AR World | `WorldLoadFailedEventData`      |
| JSONReceived         | Fires when the ARWorld sends a JSON Object          | `JSONReceivedEventData`         |
| ScreenCaptureSuccess | fires when the screen is captured                   | `ScreenCaptureSuccessEventData` |
| ScreenCaptureFail    | fires when wikitude fails to capture the screen     | `ScreenCaptureFailedEventData`  |

all can be imported from the index.d.ts.

## Credits
##### There used to be a fork of [@breningham/nativescript-wikitude](https://github.com/breningham/nativescript-wikitude) who originally started the plugin. It has been unfortunately inactive, so another fork was created. Plugin has been since then revamped several times, and this new version came up with all the possible updates for NativeScript 7 compatibility.


## License

Wikitude is (c) Wikitude GmbH Before using see their [End-User License Agreement](http://www.wikitude.com/doc/EULA_Wikitude_1.1.pdf)

Apache License Version 2.0, January 2004
