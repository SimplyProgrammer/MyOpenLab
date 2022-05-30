<template>
<div>
	<Z-grid-section id="mainVisual" class="position-relative" containerClass="align-items-center">
		<div class="col-lg-6 my-5 py-5" ref="slotWrapper">
			<slot></slot>
		</div>
		<div class="col-lg-6 d-none d-md-flex">
			<img class="img-fluid z-1" :src="mainImg">
		</div>
		<img class="position-absolute top-0 start-0 w-100 h-100 pt-5 d-md-none opacity-25" :src="mainImg">
		<template #outer>
			<img class="overflow-hidden shape-right position-absolute d-none d-md-block" :src="shape">
		</template>
	</Z-grid-section>
</div>
</template>

<script>
export default {
	props: ["mainImg", "shape"],
}
</script>