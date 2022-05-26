import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/global.scss";

import "bootstrap/dist/js/bootstrap.js";

import MainNavbar from "@/components/MainNavbar.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import MainJumbotron from "@/components/MainJumbotron.vue";
import GridSection from "@/components/GridSection.vue";

const app = createApp(App).use(router);
const origAssets = "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/";

app.mixin({
	components: {
		MainNavbar, SiteHeader, PageFooter, MainJumbotron, GridSection
	},

	methods: {
		hostOf: (url) => new URL(url).host,
		gotoSite: (href) => location.href = href
	},

	data() {
		return {
			origAssets: origAssets,

			footer: {
				brandImg: origAssets + "images/openlab-logo.svg", 
				brandTxt: "© 2022 Všetky práva vyhradené <b>OPENLAB, o.z.,</b>",
				texts: ["IČO: 50764675", "Viedenská cesta 257, 805 01 Bratislava"],
				links: "mailto:info@openlab.sk", 
				contacts: [
					{imgSrc: origAssets + "images/facebook.svg", href: "https://www.facebook.com/OpenLab.sk/"}, 
					{imgSrc: origAssets + "images/linkedin.svg", href: "https://www.instagram.com/openlab.sk/?igshid=1xz2g75a3yzu1"},
					{imgSrc: origAssets + "images/instagram.svg", href: "https://www.linkedin.com/company/openlab-sk/?trk=public_profile_topcard_current_company&amp;originalSubdomain=sk"},
				]
			},

			nav: {
				brand: {href: "#", imgSrc: origAssets + "images/openlab-logo.svg"},

				items: [
					{name: "Úvod", href: "/"},
					{
						name: "OpenLab",
						href: "/openlaby",
						dropdowns: [
							{name: "HybridLab", href: "/hybridlab"},
							{name: "GamesLab", href: "/gameslab"},
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
	app.mount("#app");
});
