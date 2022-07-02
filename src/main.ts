import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/styles/variables.css";
import "uno.css";

Vue.use(ElementUI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  render: (h) => h(App),
  router,
  pinia,
}).$mount("#app");
