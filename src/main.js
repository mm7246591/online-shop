import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import axios from "axios";
import "element-plus/dist/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp.provide("$axios", axios);
const token = localStorage.getItem("token");
if (token) createApp(App).use(router).use(store).use(ElementPlus).mount("#app");