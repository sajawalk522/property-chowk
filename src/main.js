import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import {VueGeoLocation} from 'vue-browser-geolocation'
import VueGoogleMaps from "@fawmi/vue-google-maps";
import Vue3Geolocation from "vue3-geolocation";

// Vue.use(VueGeolocation);
createApp(App)
  .use(store)
  .use(Vue3Geolocation)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
      libraries: "places"
    },
  })
  .use(router)
  .use(VueSweetalert2)
  .mount("#app");
