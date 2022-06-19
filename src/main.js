import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/global.scss";

import "bootstrap/dist/js/bootstrap.js";

import GlobalMixins from "./globals.js";

const app = createApp(App).use(router).mixin(GlobalMixins);

router.isReady().then(() => {
	app.mount("#app");
});
