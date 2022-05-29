<template>
	<div class="card border-0 rounded-3 me-3" @click="href ? gotoSite(href) : null">
		<div class="card-body" :class="noPadding != undefined ? 'p-0' : 'px-lg-5 py-4'">
			<h5 class="card-title" :class="titleClass" v-html="title" />
			<p class="text-secondary" :class="textClass ?? 'card-text'">
				<slot><p v-html="text"/></slot>
			</p>
			<a class="d-flex text-decoration-none text-secondary" :class="{'position-absolute': noPadding == undefined}" :href="href">
				<p v-if="hrefText" class="m-0 me-2" v-html="hrefText"></p>
				<img :src="origAssets + 'images/arrow-right.svg'" alt="arrow">
				<img :src="origAssets + 'images/arrow-right-blue.svg'" alt="hover arrow">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "text", "href", "hrefText", "titleClass", "textClass", "noPadding"]
}
</script>

<style lang="scss" scoped>
.card {
	transition: 0.4s;

	&.always-hover, &:hover {
		&:not(.no-hover-shadow) {
			box-shadow: 0px 0px 22px 0px rgba(180, 180, 180, 0.4);
		}

		a.text-secondary {
			color: var(--bs-primary) !important;
		}

		a img {
			display: none;

			&:nth-of-type(2) {
				display: block;
			}
		}
	}

	a.position-absolute {
		bottom: 10px;
	}

	a img {
		width: 22px;
		height: 21px;

		&:nth-of-type(2) {
			display: none;
		}
	}
}
</style>