<template>
	<Site-header />

	<Nav-bar v-bind="nav">
		<template v-slot:sideMenu>
			<div class="navSideMenu position-fixed">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/discord.svg" alt="discord">
				</a>
			</div>
		</template>
	</Nav-bar>

	Pre uc

	<Page-footer />
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>