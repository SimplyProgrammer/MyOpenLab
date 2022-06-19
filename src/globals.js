import ZMainNavbar from "@/components/ZMainNavbar.vue";
import ASiteHeader from "@/components/ASiteHeader.vue";
import ZPageFooter from "@/components/ZPageFooter.vue";
import ZMainJumbotron from "@/components/ZMainJumbotron.vue";
import ZGridSection from "@/components/layout/ZGridSection.vue";

export default {
    components: {ZMainNavbar, ASiteHeader, ZPageFooter, ZMainJumbotron, ZGridSection},

    methods: { //Do not edit!
        hostOf: (url) => new URL(url).host,
        gotoSite: (href) => location.href = href
    },

    data() {
        return {
            origAssets: process.env.VUE_APP_ORIG_ASSETS,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        }
    },

    mounted() {
        const self = this;
        window.addEventListener('resize', e => {
            self.innerWidth = window.innerWidth
            self.innerWidth = window.innerWidth
        });
    }
}
