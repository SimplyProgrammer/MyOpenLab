<template>
	<div class="d-flex flex-wrap">
		<div v-for="cell in [].concat(cells)" :key="cell" class="rounded m-2 p-4 text-end fw-bold" :class="cellClass">
			<p class="count m-0" v-html="cell.count"></p> 
			<p class="m-0" v-html="cell.name"></p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["cellClass", "cells"]
}
</script>

<style lang="scss" scoped>
.rounded {
	width: 234px;
	height: 184px;

	@media (max-width: 767.98px) {
		width: calc( 50% - 20px);
		height: 120px;
	}

	.count {
		font-size: 90px;
		line-height: 0.9;

		@media (max-width: 767.98px) {
			font-size: 50px;
		}
	}
}
</style>