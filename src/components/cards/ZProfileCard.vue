<template>
	<div class="card">
		<img class="rounded card-img-top" :src="imgSrc" :class="imgClass" alt="profile pic">
		<div class="card-body px-0">
			<h6 class="card-subtitle text-secondary fs-14px" v-html="subtitle"></h6>
			<h5 class="card-title fw-bold m-0 mt-3" :class="titleClass" v-html="title"></h5>
			<p class="card-text text-secondary" :class="textClass" v-html="text"></p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["imgSrc", "subtitle", "title", "text", "imgClass", "titleClass", "textClass"]
}
</script>