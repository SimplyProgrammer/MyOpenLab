<template>
	<section id="mainVisual" class="position-relative mb-4">
		<div class="container align-items-center">
			<div class="row">
				<div class="col-lg-6 my-5 py-5">
					<slot></slot>
				</div>
				<div class="col-lg-6 d-none d-md-flex">
					<img class="img-fluid" :src="mainImg">
				</div>
				<img class="position-absolute top-0 start-0 w-100 h-100 d-md-none opacity-25" :src="mainImg">
			</div>
		</div>
		<img class="overflow-hidden shape-right position-absolute d-none d-md-block" :src="shape">
	</section>
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