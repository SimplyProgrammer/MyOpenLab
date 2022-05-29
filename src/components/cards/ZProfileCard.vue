<template>
	<div class="card">
		<img class="rounded" :src="imgSrc" alt="profile pic">
		<div class="card-body px-0">
			<h6 class="card-subtitle text-secondary fs-14px" v-html="subtitle"></h6>
			<h5 class="card-title fw-bold m-0 mt-3" v-html="title"></h5>
			<p class="card-text text-secondary" v-html="text"></p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["imgSrc", "subtitle", "title", "text"]
}
</script>