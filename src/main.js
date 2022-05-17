import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import "bootstrap/dist/js/bootstrap.js";

import "./theme/global.scss";

import Nav from "@/components/Nav.vue";
import SiteHeader from "@/components/SiteHeader.vue";

const app = createApp(App).use(router);

app.mixin({
	components: {
		Nav, SiteHeader
	},

	data() {
		return {
			nav: {
				brand: {href: "#", imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/openlab-logo.svg"},

				items: [
					{name: "Úvod", href: "/"},
					{
						name: "OpenLab",
						href: "/openlaby",
						dropdowns: [
							{name: "HybridLab", href: "/hybridlab"},
							{name: "GamesLab",href: "/gameslab"},
							{name: "AppsLab", href: "/appslab"},
						]
					},
					{name: "Pre učiteľov", href: "/pre-ucitelov"},
					{name: "Partneri", href: "/partneri"},
					{name: "Moderná škola", href: "/moderna-skola"},
				],

				btnText: "Pridajte sa k nám",
				onBtnClicked: () => this.$router.push("/openlaby")
			}
		}
	}
});

router.isReady().then(() => {
	//var secured = "s";
	//app.config.globalProperties.beIp = decodeURIComponent("http" + secured + "%3A%2F%2F178.143.44.187%3A1089%2F");
	app.mount('#app');
});
