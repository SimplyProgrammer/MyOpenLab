<template>
	<SiteHeader />

	<Nav v-bind="nav">
		<template v-slot:sideMenu>
			<div class="navSideMenu position-fixed">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/discord.svg" alt="discord">
				</a>
			</div>
		</template>
	</Nav>
	
	<section id="mainVisual" class="bg-primary position-relative mb-4">
		<div class="container align-items-center">
			<div class="row">
				<div class="text col-lg-6 my-5 py-5">
					<h1 class="header text-white fw-light">Inštitút stredoškolského odborného vzdelávania
						<br>
						<span class="fw-bold">zameraný na IT &amp; AI</span>
					</h1>
					<p class="text-white mt-4 me-4">Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
				</div>
				<div class="col-lg-6 img-wrapper d-none d-md-block">
					<img src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/main-home.png" alt="main img">
				</div>
				<img class="position-absolute top-0 start-0 w-100 h-100 d-md-none opacity-25" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/main-home.png" alt="main img bg">
			</div>
			<img class="overflow-hidden shape position-absolute d-none d-md-block" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/o_letter.png" alt="shape">
		</div>
	</section>

	<section id="why" class="py-4">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-12">
					<h1 class="fw-light mb-5">Prečo 
						<span class="fw-bold">OpenLab?</span>
					</h1>
					<p class="mx-5 mb-5">
						V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.
					</p>
				</div>
				<div v-for="card in whyCards" :key="card" class="col-md-4 col-lg-3 pt-5">
					<div class="card border-0 text-md-start">
						<img class="mx-auto mx-md-0" :src="card.imgSrc" alt="select" width="45">
						<div class="card-body px-0 pt-3">
							<h5 class="card-title fw-bold mb-2">{{card.title}}</h5>
							<p class="card-text">{{card.text}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			whyCards: [
				{
					imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/select.svg",
					title: "Celospoločenský rozvoj",
					text: "Osnovy aj učebné materiály pre všetky tech oblasti sú open source."
				},
				{
					imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/support.svg",
					title: "Učenie praxou",
					text: "Študentov vedieme k tímovému riešeniu problémov."
				},
				{
					imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/intership.svg",
					title: "Rozvoj talentu",
					text: "Vytvárame šikovné tímy schopné riešiť veľké problémy."
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
#mainVisual {
	.text {
		z-index: 1;
	}

	.img-wrapper {
		// position: relative;
		height: 440px !important;
		z-index: 1;

		img {
			// position: absolute;
			// left: 10%;
			width: 100%;
			height: 100%;
		}
	}

	.shape {
		width: 436px;
		bottom: calc(-436px / 2);
		right: calc(-436px / 2);

		@media (max-width: 1199.98px) {
			width: 218px;
			bottom: calc(-218px / 2);
			right: calc(-218px / 2);
		}
	}
}

#why {
	.card-text {
		font-size: 14px;
	}
}
</style>