<template>
    <A-site-header />

	<Z-main-navbar v-bind="nav">
		<template #sideMenu>
			<div class="nav-side-menu">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" :src="orig + 'images/discord.svg'" alt="discord">
				</a>
			</div>
		</template>
	</Z-main-navbar>

    <router-view/>

    <Z-page-footer v-bind="footer" shapeClass="d-none d-sm-block"/>
</template>

<script>
export default {
    data() {
        return {
            footer: {
				brandImg: process.env.VUE_APP_ORIG_ASSETS + "images/openlab-logo.svg", 
				brandTxt: "© 2022 Všetky práva vyhradené <b>OPENLAB, o.z.,</b>",
				texts: ["IČO: 50764675", "Viedenská cesta 257, 805 01 Bratislava"],
				links: "mailto:info@openlab.sk", 
				contacts: [
					{imgSrc: process.env.VUE_APP_ORIG_ASSETS + "images/facebook.svg", href: "https://www.facebook.com/OpenLab.sk/"}, 
					{imgSrc: process.env.VUE_APP_ORIG_ASSETS + "images/linkedin.svg", href: "https://www.instagram.com/openlab.sk/?igshid=1xz2g75a3yzu1"},
					{imgSrc: process.env.VUE_APP_ORIG_ASSETS + "images/instagram.svg", href: "https://www.linkedin.com/company/openlab-sk/?trk=public_profile_topcard_current_company&amp;originalSubdomain=sk"},
				],
				shape: process.env.VUE_APP_ORIG_ASSETS + "images/footer.svg"
			},

			nav: {
				brand: {href: "#", imgSrc: process.env.VUE_APP_ORIG_ASSETS + "images/openlab-logo.svg"},

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
}
</script>