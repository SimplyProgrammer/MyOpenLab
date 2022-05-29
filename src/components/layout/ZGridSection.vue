<template>
	<section>
		<div class="container" :class="containerClass">
			<div class="row" :class="rowClass">
				<slot></slot>
			</div>
		</div>
		<slot name="outer"></slot>
	</section>
</template>

<script>
export default {
	props: ["containerClass", "rowClass"]

	/* data() {
		return {
			
		}
	},

	render(h, context) {
		return h('div', this.$slots.default()) //????
	},

	methods: {
		click() {
			// console.log(.$el);
		}
	} */
}
</script> 