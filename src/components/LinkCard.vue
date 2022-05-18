<template>
	<div class="card border-0 rounded-3 me-3" @click="href ? $router.push(href) : null">
		<div class="card-body px-lg-5 pb-4">
			<h5 class="card-title" v-html="title" />
			<p class="card-text text-secondary" v-html="text" />
			<img class="position-absolute" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right.svg" alt="arrow">
			<img class="position-absolute" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right-blue.svg" alt="hover arrow">
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "text", "href"]
}
</script>

<style lang="scss" scoped>
.card {
	transition: 0.4s;

	&:hover {
		box-shadow: 0px 0px 22px 0px rgba(180, 180, 180, 0.4);

		img.position-absolute:nth-of-type(2) {
			display: block;
		}
	}

	img.position-absolute {
		bottom: 16px;

		&:nth-of-type(2) {
			display: none;
		}
	}
}
</style>