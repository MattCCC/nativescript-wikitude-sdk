import Vue from 'nativescript-vue'
import App from './components/App.vue'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '192.168.0.22' })
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production') ? true : false;

(<any>global).wikitudeLicense = "GZvPmr6vSxxKECVpbHHuFKk8kN2Q9CSDdpGj9uxdM5YsKw6xekmH+J3D7xtViH6/rd7U97m0RclkF/V63a5IMr8+CYbtKOdLxbnBiFf4r9NjaJ7FLj+rWO/5yz32k+aRz7JPb003KjXQnN3eNmN7H1rfwkbQl15qaBv9TL4E9ghTYWx0ZWRfX0azw85+IlnyWpDSyqvs/ejFwqWDPTlPyjoyTY2c9Al+RlWbXWEHukX+NBs/hZomDw4RnifnSKOhNTowMvRUINmv85lpeMbKQAbqnOAlbsAG7JEXPGi37DdbSxhhi/SNmL25/dEA4dtA3WHNCfIFuYY4HpE8ihgDFMpneldzkDGDUB9ZNxQ+p+wdinPQLUUm+6pK7JYUIf5K3v2oBO+oCC0RsH9OnegvOZYgaUWV1CAvAFhdlW2F2T3iQzYByt0OZE0+6xG6ZOsM1b7m3zha72Y4EU+nNcOBUmGMYcY8Cet5ZZa1Cgbodx5TChBGck1E/9bycVWV3sIEhJ/DZuwZrCc6tV/qUeZH7OIy/qYxXF/HI4TaJVkDVE7rCMOd4AAr2I7PPe5pwC9HrracJh2y080r7QPffkQmrfTqrkHVzkOVAOMa+ECgSuPRlHVczbxlLplmhyKO3//pCXH+qHqSQPEsany/5ShfhTDqRGsBk3dsrHgWpYYD+EsEZkPF2tDjIg2WfS5tFrzKP2vQMQ4SH48+WaDpNfByL/YQB+C0q2qDNjZkJNONxas1DOrr7upREzZHduLAQX2Xip782etqXwT09kl2n0AUSnr43mb8Pf/Cjn2dUiDNnk6KgJijCbMSFRpAeHUQwnt28o/re0hAZuhHvturADZ/Yflo5ACFcXzFAQyZwWiJGzc=";

Vue.registerElement('Wikitude', () => require('nativescript-wikitude-sdk').Wikitude);

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
