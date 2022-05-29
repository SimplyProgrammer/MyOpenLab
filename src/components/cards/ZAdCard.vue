<template>
	<div class="card">
		<img :class="imgClass" :src="imgSrc" alt="school">
		<div class="card-body mx-0 px-1 py-4">
			<a class="text-decoration-none" :href="'https://www.google.com/maps/place/' + loc">
				<h6 class="card-subtitle text-secondary">
					<img :src="origAssets + 'images/place.svg'" alt="place">
					{{loc}}
				</h6>
			</a>
			<div class="card-title d-flex justify-content-between align-items-end mt-4">
				<span class="fw-bold me-5" :class="titleClass" v-html="title"></span>
				<a class="text-primary fw-bold text-decoration-none" :href="href">{{hostOf(href)}}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["imgSrc", "title", "loc", "name", "href", "imgClass", "titleClass"]
}
</script>