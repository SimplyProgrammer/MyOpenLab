<template>
	<Site-header />

	<MainNavbar v-bind="nav">
		<template v-slot:sideMenu>
			<div class="navSideMenu position-fixed">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" :src="origAssets + 'images/discord.svg'" alt="discord">
				</a>
			</div>
		</template>
	</MainNavbar>

	<Main-jumbotron	Main-jumbotron class="bg-primary">
		GamesLab
	</Main-jumbotron>
	
	<Page-footer v-bind="footer"/>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>