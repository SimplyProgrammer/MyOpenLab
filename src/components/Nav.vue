<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-white">
		<div class="container">
			<a v-if="brand" :href="brand.href" class="navbar-brand">
				<img :src="brand.imgSrc" alt="openlab">
			</a>

			<button class="navbar-toggler" @click="$refs.navSideMenu.open()">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse bg-white">
				<ul class="navbar-nav mx-auto ms-lg-5 text-center">
					<li class="nav-item dropdown me-lg-3" v-for="item in items" :key="item">
						<div v-if="item.dropdowns">
							<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="dropDown" :href="item.href">{{item.name}}</a>
							<div class="dropdown-menu bg-white border-0" aria-labelledby="dropDown">
								<a class="dropdown-item" v-for="dropdownOption in item.dropdowns" :key="dropdownOption" :href="dropdownOption.href">{{dropdownOption.name}}</a>
							</div>
						</div>
						<a v-else class="nav-link" data :href="item.href">{{item.name}}</a>
					</li>
				</ul>

				<button class="btn btn-primary" @click="onBtnClicked()">{{btnText}}</button>
			</div>
		</div>
	</nav>

	<SideMenu ref="navSideMenu">
		<div class="text-center">
			<div class="mx-5" v-for="item in items" :key="item">
				<a class="nav-link my-2" :href="item.href">{{item.name}}</a>
				<a class="nav-link my-2" v-for="dropdownOption in item.dropdowns" :key="dropdownOption"  :href="dropdownOption.href">{{dropdownOption.name}}</a>
			</div>
			<button class="btn-big my-2 btn btn-primary" @click="onBtnClicked()">{{btnText}}</button>
			<br>
			<slot name="sideMenu"></slot>
		</div>
	</SideMenu>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";

export default {
	components: {
		SideMenu
	},

	props: {
		brand: {
			type: Object
		},

		items: {
			type: Array,
			required: true
		},

		onBtnClicked: {
			type: Function,
			default: () => {}
		},

		btnText: {
			type: String,
		}
	},
}
</script>

<style lang="scss" scoped>
nav {
	font-size: 14px;
	height: 80px;
	font-weight: 600;
}

.nav-link {
	color: #1a232f !important;
}

.nav-link:hover, .dropdown-item:hover {
	color: #0d6efd !important;
}
</style>