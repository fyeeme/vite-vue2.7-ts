import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";

import "@/styles/variables.css";
import 'windi.css'

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  render: (h) => h(App),
  router,
  pinia,
}).$mount("#app");
