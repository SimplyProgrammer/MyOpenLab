<template>
	<footer class="py-5 position-relative overflow-hidden">
		<div class="container">
			<div class="row align-items-end text-secondary">
				<div class="col-sm-6 col-lg-4 mt-2">
					<img :src="brandImg" :class="imgClass">
					<p class="m-0 mt-2" v-html="brandTxt"></p>
				</div>
				<div class="col-sm-6 col-lg-3 mt-2">
					<p v-for="txt in [].concat(texts)" :key="txt" class="m-0" v-html="txt"></p>
				</div>
				<div class="col-sm-6 col-lg-2 mt-2">
					<a v-for="link in [].concat(links)" :key="link" class="m-0 text-secondary" :href="link">{{link.toString().replace("mailto:", "")}}</a>
				</div>
				<Z-img-flow class="col-sm-6 col-lg-3 d-flex justify-content-md-end mt-2" imgClass="mx-2" :imgs="contacts"/>
			</div>
		</div>
		<img class="position-absolute top-50" :class="shapeClass" :src="shape">
	</footer>
</template>

<script>
import ZImgFlow from "@/components/layout/ZImgFlow.vue";

export default {
	components: {ZImgFlow},
	props: ["brandImg", "brandTxt", "texts", "links", "contacts", "shape", "imgClass", "shapeClass"],
}
</script>

<style lang="scss" scoped>
footer {
	p, a {
		font-size: 11.5px;
	}

	img.position-absolute {
		z-index: -1;
		right: 0;
	}
}
</style>