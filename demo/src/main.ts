import {
  Trace,
  TraceErrorHandler,
} from '@nativescript/core';

const errorHandler: TraceErrorHandler = {
  handlerError(err) {
    // eslint-disable-next-line no-console
    console.log('[Unhandled Exception]', err);
    Trace.write(err, '[Unhandled Exception]');

    throw err;
  },
};

if (Trace && Trace.setErrorHandler) {
  Trace.setErrorHandler(errorHandler);
}

import Vue from 'nativescript-vue'
import App from './components/App.vue'

Vue.config.silent = false;

(<any>global).wikitudeLicense = "gEN8IfezW61Dm4kcxfllwftvGvSG7jIazp30cQbskywPzUwcQACoefmlYaKMQ9J2MQGZH25WhCAc3ESLBiOd54HPlnJcONQvRd8dYVCakag2G1rRhiA+WA8pP8l7fxhShf4TSeOv8jyYlM+Aey5K+EMGqAV4ikLxK+CiLfwxTC9TYWx0ZWRfX7kKhcv3nzfg7F58KktKsEhtmmccKuzCAQIlStexV+EmbFx1l6FXJA4WSPT9iuxr9Iz3wguRrNztwNeWav9r4SI4iuUgnu3e6/KWO1VJmrBsZbkMRFXaX0HIwOxMBESqSEEFTBB+2bNwaQI5NlHaMHIdsr054UkWHMZUfOHyq6y2kWpQ0acRVwMMCIgbsGFiKlYwjGp6eBcfE525pknd5PmX+/Dgbg9X+dlSxNnhiIjgOZRTtEHOiy0G8XUkDkA2rKrfgeJxSKYHbxd7TdfLofyc9f3hxDmh15P4YzFonN3oUOjutL9rASx667Mx1MgM1KfLmVwN3KHYdRY2LOMt/EKlArnj7tE7XnCR9Nom4Bg52bTfA6PrFUSdxuYu1KwwERWMALePHMdOFjoDwpK9/E65fGLfX3AovR3Wka31HpbcjKrIr2eh5q7TmFDmpX2/YphHnZJHJVCJyQPta/DVpktS1Hm/2Ieaui2nWVekfQYzTw6TDH7Q4rF6evqYKz4dceAIqB+bVhCscmfE/VvNYRrPkHO0SKzWVqS30VBSb9eZDVigGYTNnpCelET//NrbUwCBq49rbydHg0ur/i/wMVC2+gxf8z0/i2xdU3CCe9Z9vIr7eKBsSIeawhvy8cKjFBIWVr6Sf6bL/lVibXOHs/PqDuMkKH+sNyGfqMBaPLjVhNG6lZv3Oqk=";

Vue.registerElement('Wikitude', () => require('nativescript-wikitude-sdk').Wikitude);

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
