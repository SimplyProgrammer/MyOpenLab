<template>
	<footer class="py-5 position-relative overflow-hidden">
		<div class="container">
			<div class="row align-items-end text-secondary">
				<div class="col-6 col-lg-4">
					<img :src="brandImg">
					<p class="m-0 mt-2" v-html="brandTxt"></p>
				</div>
				<div class="col-6 col-lg-3">
					<p v-for="txt in [].concat(texts)" :key="txt" class="m-0" v-html="txt"></p>
				</div>
				<div class="col-6 col-lg-2">
					<a v-for="link in [].concat(links)" :key="link" class="m-0 text-secondary" href="mailto:info@openlab.sk">{{link}}</a>
				</div>
				<div class="col-6 col-lg-3 d-flex justify-content-end">
					<a v-for="contact in [].concat(contacts)" :key="contact" :href="contact.href">
						<img class="mx-2" :src="contact.imgSrc">
					</a>
				</div>
			</div>
		</div>
		<img class="position-absolute top-50" :src="origAssets + 'images/footer.svg'" alt="footer">
	</footer>
</template>

<script>
export default {
	props: ["brandImg", "brandTxt", "texts", "links", "contacts"],
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