<template>
	<div class="position-relative mt-5 mt-lg-0">
		<input v-model="input" class="bg-white border-0 w-100 rounded-3 px-3" :class="[inputClass, {error: input && !input.match(pattern)}]" :placeholder="placeholder">
		<img class="position-absolute" role="button" :src="confirmImg" @click="confirm()">
	</div>
</template>

<script>
export default {
	props: ["value", "inputClass", "placeholder", "confirmImg", "pattern"],

	data() {
		return {
			input: this.value ?? ""
		}
	},

	methods: {
		confirm() {
			if (this.input && this.input.match(this.pattern))
				this.$emit("onConfirm", this.input);
		}
	}
}
</script>

<style lang="scss" scoped>
input {
	height: 40px;
	outline: none;

	&.error {
		border: 1px solid var(--bs-danger) !important;
	}
}

img[role=button] {
	top: 25%;
	right: 25px;
}
</style>