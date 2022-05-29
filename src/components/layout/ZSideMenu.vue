<template>
	<transition name="fade">
		<div v-if="isOpen" class="bg w-100 h-100 position-fixed top-0 start-0" @click.self="close()">
			<transition :name="side == 'left' ? 'appearSideBarLeft' : 'appearSideBarRight'">
				<div v-if="isMenuOpen" class="sidebar h-100" :class="{'float-start': side == 'left', 'float-end': side == 'right'}" :style="{width: menuWidth, background: menuBackground}">
					<img class="btn float-end m-2" src="@/assets/imgs/x.svg" alt="close" @click.self="close()">
					<br><br>
					<slot></slot>
				</div>
			</transition>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		side: {
			type: String,
			default: "right"
		},

		menuWidth: {
			type: String,
			default: "280px"
		},

		menuBackground: {
			type: String,
			default: "white"
		}
	},

	data() {
		return {
			isOpen: false,
			isMenuOpen: false
		}
	},

	methods: {
		open() {
			this.isOpen = true;

			const self = this;
			setTimeout(() => self.isMenuOpen = true, 400);
		},

		close() {

			this.isMenuOpen = false;

			const self = this;
			setTimeout(() => self.isOpen = false, 100);
		}
	}
}
</script>

<style lang="scss" scoped>
.appearSideBarRight-enter-from {
	transform: translateX(100%);
}

.appearSideBarRight-enter-to {
	transform: translateX(0);
}

.appearSideBarLeft-enter-from {
	transform: translateX(-100%);
}

.appearSideBarLeft-enter-to {
	transform: translateX(0%);
}


.appearSideBarRight-leave-from {
	transform: translateX(0);
}

.appearSideBarRight-leave-to {
	transform: translateX(100%);
}

.appearSideBarLeft-leave-from {
	transform: translateX(0%);
}

.appearSideBarLeft-leave-to {
	transform: translateX(-100%);
}

.appearSideBarLeft-enter-active, .appearSideBarRight-enter-active, .appearSideBarLeft-leave-active, .appearSideBarRight-leave-active {
	transition: 0.3s;
}

.bg {
	background: rgba(65, 65, 65, 0.7);
	z-index: 999;

	.sidebar {
		font-weight: 600;
		font-size: 14px;

		img.btn {
			width: 50px;
		}
	}
}
</style>