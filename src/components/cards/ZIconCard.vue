<template>
	<div class="card border-0 text-md-start">
		<img class="mx-auto mx-md-0" :class="imgClass" :src="imgSrc" alt="select" width="45">
		<div class="card-body px-0 pt-3">
			<h5 class="card-title fw-bold mb-2" :class="titleClass" v-html="title"></h5>
			<p class="card-text text-secondary" :class="textClass" v-html="text"></p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["imgSrc", "title", "text", "imgClass", "titleClass", "textClass"]
}
</script>