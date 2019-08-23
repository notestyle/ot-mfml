import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import Notifications from "vue-notification";

Vue.config.productionTip = false
Vue.use(Notifications);

new Vue({ el: '#app', router, store, render: h => h(App) })
