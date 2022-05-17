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

	<section id="why" class="py-5">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-12">
					<h1 class="fw-light mb-5">Prečo 
						<span class="fw-bold">OpenLab?</span>
					</h1>
					<p class="mx-5 mb-5 text-secondary">
						V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.
					</p>
				</div>
				<div v-for="card in whyCards" :key="card" class="col-md-4 col-lg-3 pt-5">
					<div class="card border-0 text-md-start">
						<img class="mx-auto mx-md-0" :src="card.imgSrc" alt="select" width="45">
						<div class="card-body px-0 pt-3">
							<h5 class="card-title fw-bold mb-2">{{card.title}}</h5>
							<p class="card-text text-secondary">{{card.text}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="vision" class="py-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5 my-5">
					<h1 class="fw-light mb-5">Naša vízia
						<b class="fw-bold">v OpenLabe</b>
					</h1>
					<p class="mb-4 text-secondary">Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.</p>
					<p class="text-secondary">Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.</p>
				</div>
				<div class="col-lg-7 d-flex flex-wrap justify-content-center justify-content-lg-end">
					<div v-for="cell in visionCells" :key="cell" class="rounded m-2 p-4 text-end fw-bold d-flex flex-column justify-content-end">
						<p class="count m-0">{{cell.count}}</p> 
						<p class="m-0">{{cell.name}}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="labs" class="py-5">
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-md-12 col-xl-4 text-start mb-5 mb-xl-0">
					<h1 class="fw-light">V akých laboch
						<br>
						<span class="fw-bold">možeš študovať?</span>
					</h1>
				</div>
				<div class="col-lg-8 card-group">
					<div v-for="card in labsCards" :key="card" class="card border-0 rounded-3 me-3" @click="$router.push(card.href)">
						<div class="card-body px-lg-5 pb-4">
							<h5 class="card-title"><b class="fw-bold">{{card.lab}}</b>Lab</h5>
							<p class="card-text text-secondary">{{card.text}}</p>
							<img class="position-absolute" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right.svg" alt="arrow">
							<img class="position-absolute" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right-blue.svg" alt="arrow">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="schools" class="py-5">
		<div class="container p-2">
			<div class="row justify-content-evenly">
				<div class="col-lg-12 text-center">
					<h1 class="fw-light mb-5">
						<span class="fw-bold">Nachádzame sa</span>
						na dvoch školách
					</h1>
				</div>
				<div v-for="school in schools" :key="school" class="col-lg-5">
					<div class="card border-0">
						<img :src="school.imgSrc" alt="school">
						<div class="card-body mx-0 px-1 py-4">
							<h6 class="card-subtitle text-secondary">
								<img src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/place.svg" alt="place">
								{{school.loc}}
							</h6>
							<div class="card-title d-flex justify-content-between align-items-end mt-4">
								<span class="fw-bold me-4">{{school.name}}</span>
								<a class="text-primary fw-bold text-decoration-none" :href="school.href">{{host(school.href)}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="want" class="py-5 bg-primary-lighter">
		<div class="container py-5">
			<div class="row">
				<div class="col-12 col-lg-5">
					<h1 class="fw-bold">Chceš ísť študovať odbor
						<br>
						<span class="fw-light">kompletne zameraný na IT?</span>
					</h1>
					<h5 class="fw-bold mt-5 mb-3">Programovanie digitálnych technológií</h5>
					<p class="text-secondary">Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.</p>
					<p class="text-secondary">Staň sa súčasťou tohto inovatívneho študijného programu aj ty!</p>
					<button class="btn btn-big w-50 btn-primary mt-4">Chcem vedieť viac</button>
				</div>
				<div class="col-lg-7">
					Hi
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
			],

			visionCells: [
				{count: 11, name: "tried"},
				{count: 222, name: "študentov"},
				{count: 14, name: "labmastrov"},
				{count: 2, name: "školy"},
			],

			labsCards: [
				{lab: "Hybrid", text: "Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.", href: "/hybridlab"},
				{lab: "Games", text: "Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný dizajn.", href: "/gameslab"},
				{lab: "Apps", text: "Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.", href: "/appslab"}
			],

			schools: [
				{
					name: "Stredná Priemyselná Škola Elektrotechnická", 
					loc: "Hálova 16, Bratislava", 
					imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/school1.png", 
					href: "https://spsehalova.sk/"
				},
				{
					name: "Stredná Priemyselná Škola Informačných Technológií", 
					loc: "Nábrežná 1325, Kysucké Nové Mesto", 
					imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/school2.png", 
					href: "http://www.spsknm.sk/ssknm/"
				}
			]
		}
	},

	methods: {
		host: (url) => new URL(url).host
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

#vision {
	.rounded {
		width: 234px;
		height: 184px;

		&:nth-child(1) {
			color: #5b94d7;
			background-color: rgba(221, 236, 251, 0.4);
		}

		&:nth-child(2) {
			color: #5cc19a;
			background-color: rgba(156, 238, 204, 0.4);
		}

		&:nth-child(3) {
			color: #dbca68;
			background-color: rgba(238, 226, 156, 0.4);
		}

		&:nth-child(4) {
			color: #b95e73;
			background-color: rgba(238, 156, 156, 0.4);
		}

		@media (max-width: 767.98px) {
			width: calc( 50% - 20px);
			height: 120px;
		}

		.count {
			font-size: 90px;
			line-height: 0.9;

			@media (max-width: 767.98px) {
				font-size: 50px;
			}
		}
	}
}

#labs {
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
}
</style>