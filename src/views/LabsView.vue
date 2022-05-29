<template>
	<A-site-header />

	<Z-main-navbar v-bind="nav">
		<template v-slot:sideMenu>
			<div class="nav-side-menu">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" :src="origAssets + 'images/discord.svg'" alt="discord">
				</a>
			</div>
		</template>
	</Z-main-navbar>

	<Z-main-jumbotron class="bg-primary">
		Laby
	</Z-main-jumbotron>

	<Z-page-footer v-bind="footer"/>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>