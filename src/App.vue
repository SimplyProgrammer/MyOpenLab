<template>
  	<router-view/>
	<button class="position-fixed bottom-0 end-0 btn btn-primary m-2 m-xl-4 rounded-circle p-0 z-2" @click="confirm('Susienocky...')">
		<img src="https://www.svgrepo.com/show/365614/paperclip-horizontal-thin.svg">
	</button>
</template>

<script>
export default {
	methods: {
		confirm: (txt) => confirm(txt)
	},
}
</script>

<style lang="scss" scoped>
button {
	width: 48px !important;
	height: 48px !important;

	img {
		width: 28px;
		filter: invert(1)
	}
}
</style>