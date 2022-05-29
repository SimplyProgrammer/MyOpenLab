<template>
	<div class="d-flex flex-wrap">
		<a v-for="img in [].concat(imgs)" :class="wrapperClass" :style="{width: (100 / cols) + '%'}" :key="img" :href="img?.href">
			<img class="img-fluid" :class="imgClass" :src="img.imgSrc ?? img" :alt="img.imgSrc ?? img">
		</a>
	</div>
</template>

<script>
export default {
	props: ["imgs", "imgClass", "wrapperClass", "cols"]
}
</script>