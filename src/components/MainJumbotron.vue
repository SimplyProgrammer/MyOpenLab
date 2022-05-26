<template>
	<Grid-section id="mainVisual" class="position-relative mb-4" containerClass="align-items-center">
		<div class="col-lg-6 my-5 py-5" ref="slotWrapper">
			<slot></slot>
		</div>
		<div class="col-lg-6 d-none d-md-flex">
			<img class="img-fluid" :src="mainImg">
		</div>
		<img class="position-absolute top-0 start-0 w-100 h-100 d-md-none opacity-25" :src="mainImg">
	</Grid-section>
</template>

<script>

export default {
	props: ["mainImg", "shape"],
}
</script>

<style lang="scss" scoped>
.img-fluid {
	z-index: 1;
}
</style>