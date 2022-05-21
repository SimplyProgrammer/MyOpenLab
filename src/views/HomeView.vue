<template>
	<Site-header />

	<Nav-bar v-bind="nav">
		<template v-slot:sideMenu>
			<div class="navSideMenu position-fixed">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/discord.svg" alt="discord">
				</a>
			</div>
		</template>
	</Nav-bar>
	
	<section id="mainVisual" class="bg-primary position-relative mb-4">
		<div class="container align-items-center">
			<div class="row">
				<div class="text col-lg-6 my-5 py-5">
					<h1 class="text-white fw-light">Inštitút stredoškolského odborného vzdelávania
						<br>
						<span class="fw-bold">zameraný na IT &amp; AI</span>
					</h1>
					<p class="text-white mt-4 me-4">Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
				</div>
				<div class="col-lg-6 d-none d-md-flex">
					<img class="img-fluid" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/main-home.png" alt="main img">
				</div>
				<img class="position-absolute top-0 start-0 w-100 h-100 d-md-none opacity-25" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/main-home.png" alt="main img bg">
			</div>
		</div>
		<img class="overflow-hidden shape-right position-absolute d-none d-md-block" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/o_letter.png" alt="shape">
	</section>

	<section id="why" class="py-5">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-12">
					<h1 class="fw-light mb-5">Prečo 
						<span class="fw-bold">OpenLab?</span>
					</h1>
					<p class="mx-5 mb-5 text-secondary">V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.</p>
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
			<div class="row">
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
					<Link-card v-for="card in labsCards" :key="card" v-bind="card"/>
				</div>
			</div>
		</div>
	</section>

	<section id="schools" class="py-5 position-relative">
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
								<a class="text-primary fw-bold text-decoration-none" :href="school.href">{{hostOf(school.href)}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img class="overflow-hidden shape-right position-absolute d-none d-md-block" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/p_letter.png" alt="shape">
	</section>

	<section id="want" class="bg-primary-lighter pt-5">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-5 py-5">
					<h1 class="fw-bold">Chceš ísť študovať odbor
						<br>
						<span class="fw-light">kompletne zameraný na IT?</span>
					</h1>
					<h5 class="fw-bold mt-5 mb-3">Programovanie digitálnych technológií</h5>
					<p class="text-secondary">Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.</p>
					<p class="text-secondary pt-2">Staň sa súčasťou tohto inovatívneho študijného programu aj ty!</p>
					<button class="btn btn-big w-50 btn-primary mt-4" @click="gotoSite('https://pdt.openlab.sk/')">Chcem vedieť viac</button>
				</div>
				<div class="col-lg-7 d-none d-lg-flex align-items-end">
					<img class="img-fluid" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/students.png" alt="img">
				</div>
			</div>
		</div>
	</section>

	<section id="join" class="py-5">
		<div class="container pt-5">
			<div class="text-center pt-5 mb-5">
				<h1 class="fw-light">Pridajte sa k nám
					<br>
					<span class="fw-bold">My všetci sme OpenLab…</span>
				</h1>
			</div>
			<div class="card-group">
				<Link-card v-for="card in joinCards" :key="card" v-bind="card"/>
			</div>
		</div>
	</section>

	<section id="studentProjects" class="py-5 position-relative">
		<div class="container border-bottom">
			<div class="text-center py-4">
				<h1 class="fw-light">Pozrite si
					<span class="fw-bold">študentské projekty</span>
				</h1>
				<p class="text-secondary m-5 px-5">Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a celú spoločnosť vpred.</p>
			</div>
			<p class="fw-light mt-3 mb-5 position-relative">Projekty študentov v
				<span class="fw-bold">OpenLabe</span>
			</p>
			<a class="text-decoration-none text-primary d-flex mb-5" href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw">Pozrieť si všetky projekty
				<img class="ms-2" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right-blue.svg" alt="hover arrow">
			</a>
		</div>
		<img class="overflow-hidden shape-left position-absolute d-none d-md-block" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/a_letter.png" alt="shape">
	</section>

	<section id="special" class="py-5">
		<div class="container border-bottom py-5">
			<div class="row justify-content-center">
				<div class="col-12 text-center mb-4">
					<h1 class="fw-light">Čím sme
						<span class="fw-bold">výnimoční?</span>
					</h1>
				</div>
				<div v-for="card in specialsCards" :key="card" class="col-lg-4 pt-5 px-4">
					<div class="card border-0 text-md-start">
						<img class="mx-auto ms-0" :src="card.imgSrc" alt="select" width="45">
						<div class="card-body px-0 pt-3">
							<h5 class="card-title fw-bold my-2 mb-3">{{card.title}}</h5>
							<p class="card-text text-secondary">{{card.text}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="meetUs" class="py-5">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h1 class="fw-bold mb-5">Spoznaj nás</h1>
				</div>
				<div v-for="card in usCards" :key="card" class="col-6 col-lg-3 mb-4">
					<div class="card border-0">
						<img class="rounded" :src="card.imgSrc" alt="profile pic">
						<div class="card-body px-0">
							<h6 class="card-subtitle text-secondary fs-14px">{{card.subtitle}}</h6>
							<h5 class="card-title fw-bold m-0 mt-3">{{card.title}}</h5>
							<p class="card-text text-secondary">{{card.text}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="supportUs" class="py-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<img class="img-fluid mb-2" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/people.png" alt="img">
				</div>
				<div class="col-lg-6">
					<h2 class="fw-bold mb-4">Podporte nás</h2>
					<p class="text-secondary mb-5">OpenLab postupne rozširujeme ako neziskový vzdelávací projekt s cieľom otvoriť OpenLab-y zamerané na rôzne IT technológie na čo najväčší počet škôl vo všetkých slovenských regiónoch. Veríme, že OpenLab bude natoľko úspešný, že sa stane štandardom vzdelávania na Slovensku!</p>
					<a class="text-decoration-none text-primary d-flex" href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw">Chcem podporiť
						<img class="ms-2" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/arrow-right-blue.svg" alt="hover arrow">
					</a>
				</div>
			</div>
		</div>
	</section>

	<section id="whoBehind" class="py-5">
		<div class="container py-4">
			<div class="row align-items-center">
				<div class="col-lg-5">
					<h1 class="fw-light mb-5 m-lg-0">Kto stojí
						<br>
						<span class="fw-bold">za Openlabom?</span>
					</h1>
				</div>
				<div class="col-lg-7 d-flex flex-wrap justify-content-evenly">
					<img v-for="img in whoImgs" :key="img" class="img-fluid my-3 me-5" :src="img" :alt="img">
				</div>
			</div>
		</div>
	</section>

	<section id="instagram" class="py-5 my-5 row flex-wrap">
		<img v-for="i in 6" :key="i" class="col-2 p-0 img-fluid" src="https://openlab.sk/wp-content/uploads/spotlight-insta/17958348493693799-s.jpg">
	</section>

	<section id="modernSchool" class="py-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6 pe-5 order-2 order-lg-0">
					<h1 class="fw-light mb-5 m-lg-0">Nie je moderná škola
						<br>
						<span class="fw-bold">ako moderná škola</span>
					</h1>
					<p class="text-secondary mt-3 mb-4">Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je rozobrať svet štandardného vzdelávania a spôsob ako môže fungovať moderné vzdelávanie v technológiach.</p>
					<div class="d-flex mb-4">
						<a v-for="plat in podcastPlatforms" :key="plat" :href="plat.href">
							<img class="me-3" :src="plat.imgSrc">
						</a>
					</div>
					<button class="btn btn-primary btn-big w-50" @click="$router.push('/moderna-skola')">Moderná škola</button>
				</div>
				<div class="col-lg-6">
					<img class="img-fluid mb-5 mb-lg-0" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/modern.png" alt="modern school">
				</div>
			</div>
		</div>
	</section>

	<section id="supporters" class="py-5">
		<div class="container py-4">
			<h1 class="fw-light text-center mb-5">Pozrite si
				<span class="fw-bold">študentské projekty</span>
			</h1>
			<div class="d-grid pt-4">
				<div v-for="supp in supporters" :key="supp" class="d-flex justify-content-center align-items-center">
					<img class="img-fluid mx-3" :src="supp">
				</div>
			</div>
		</div>
	</section>

	<section id="newsletter" class="py-5">
		<div class="container p-5 mb-5 bg-primary-light rounded-3">
			<div class="row align-items-center">
				<div class="col-lg">
					<h5 class="fw-light m-0 ps-lg-4">Prihláste sa do nášho newslettra a budete mať
						<br>
						<span class="fw-bold">čerstvé informácie o živote v OpenLabe.</span>
					</h5>
				</div>
				<div class="col-lg">
					<div class="position-relative mt-5 mt-lg-0">
						<input class="bg-white border-0 w-100 rounded-3 px-3 " placeholder="Sem napíš tvoj e-mail" type="email">
						<img class="position-absolute" role="button" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/send.svg">
					</div>
				</div>
			</div>
		</div>
	</section>

	<Page-footer />
</template>

<script>
import LinkCard from "@/components/LinkCard.vue";

const origAssets = "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/";

export default {
	components: {
		LinkCard
	},

	data() {
		return {
			whyCards: [
				{title: "Celospoločenský rozvoj", text: "Osnovy aj učebné materiály pre všetky tech oblasti sú open source.", imgSrc: origAssets + "images/select.svg"},
				{title: "Učenie praxou", text: "Študentov vedieme k tímovému riešeniu problémov.", imgSrc: origAssets + "images/support.svg"},
				{title: "Rozvoj talentu", text: "Vytvárame šikovné tímy schopné riešiť veľké problémy.", imgSrc: origAssets + "images/intership.svg"}
			],

			visionCells: [
				{count: 11, name: "tried"},
				{count: 222, name: "študentov"},
				{count: 14, name: "labmastrov"},
				{count: 2, name: "školy"},
			],

			labsCards: [
				{title: "<b>Hybrid</b>Lab", text: "Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.", href: "/hybridlab"},
				{title: "<b>Games</b>Lab", text: "Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný dizajn.", href: "/gameslab"},
				{title: "<b>Apps</b>Lab", text: "Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.", href: "/appslab"}
			],

			schools: [
				{
					name: "Stredná Priemyselná Škola Elektrotechnická", 
					loc: "Hálova 16, Bratislava", 
					imgSrc: origAssets + "/images/school1.png", 
					href: "https://spsehalova.sk/"
				},
				{
					name: "Stredná Priemyselná Škola Informačných Technológií", 
					loc: "Nábrežná 1325, Kysucké Nové Mesto", 
					imgSrc: origAssets + "images/school2.png", 
					href: "http://www.spsknm.sk/ssknm/"
				}
			],

			joinCards: [
				{title: "<b>Labmastri</b>", text: "Odborníci z praxe, ktorí odovzdávajú študentom svoj know-how v roli mentora 5 hodín týždenne celý školský rok."},
				{title: "<b>Firmy</b>", text: "Technologické firmy sú garantmi obsahu jednotlivých labov, spolupracujú so študentmi na projektoch a v rámci študentských stáží."},
				{title: "<b>Školy</b>", text: "Stredné odborné školy zamerané na digitálne technológie v jednotlivých regiónoch inovujú svoje technologické vzdelávanie."},
				{title: "<b>Študenti</b>", text: "Stredoškoláci so záujmom o najnovšie technológie a silnou vnútornou motiváciou učiť sa nové veci a rozvíjať svoje schopnosti."}
			],
			
			specialsCards: [
				{title: "Partnerstvo", text: "Dáva študentom slobodu, ktorú vyvažujú zodpovednosťou. Spolupráca LabMastra a študentov je v partnerskej rovine.", imgSrc: origAssets + "images/special1.svg"},
				{title: "LabMaster", text: "Je mentor s expertízou v danej oblasti, ktorý nastavuje rámce a sprevádza študentov pri dosahovaní míľnikov.", imgSrc: origAssets + "images/special2.svg"},
				{title: "Učebný blok", text: "Je základný dokument, z ktorého sa študenti učia. Obsahuje všetky vzdelávacie podklady pre konkrétnu fázu.", imgSrc: origAssets + "images/special3.svg"},
				{title: "Problem driven", text: "Je princíp učenia, vďaka ktorému sú študenti vedení ku kritickému mysleniu s cieľom vyriešiť konkrétne problémy.", imgSrc: origAssets + "images/special4.svg"},
				{title: "Project driven", text: "Po teoretickej fáze sú študenti rozdelení do tímov, v ktorých v spolupráci s firmami tvoria konkrétny projekt pre zákazníka.", imgSrc: origAssets + "images/special5.svg"},
				{title: "Samoštúdium", text: "Študenti trávia 80% času samoštúdiom a sú vedení k tímovej spolupráci. 20% teórie slúži iba ako odrazový mostík.", imgSrc: origAssets + "images/special6.svg"}
			],

			usCards: [
				{title: "Grigor Ayrumyan", subtitle: "BOARD MEMBER & EXECUTIVE TEAM", text: "Co-founder & Executive Director", imgSrc: origAssets + "images/grigor-ayrumyan.jpg"},
				{title: "Slavomír Terezka", subtitle: "BOARD MEMBER", text: "Co-founder", imgSrc: origAssets + "images/slavomir-terezka.jpg"},
				{title: "Roman Sekerka", subtitle: "BOARD MEMBER & EXECUTIVE TEAM", text: "Co-founder & Tech Garant pre HybridLab a AppsLab", imgSrc: origAssets + "images/roman-sekerka.jpg"},
				{title: "Ján Kožlej", subtitle: "BOARD MEMBER & EXECUTIVE TEAM", text: "Tech Garant pre GamesLab", imgSrc: origAssets + "images/jan-kozlej.jpg"},
				{title: "Veronika Radobická", subtitle: "EXECUTIVE TEAM", text: "Marketing Manager", imgSrc: origAssets + "images/veronika-radobicka.jpg"},
				{title: "Dominika Krullová", subtitle: "EXECUTIVE TEAM", text: "Project Manager", imgSrc: origAssets + "images/dominika-krullova.jpg"},
				{title: "Viktória Jakubovičová", subtitle: "EXECUTIVE TEAM", text: "Relationship Manager", imgSrc: origAssets + "images/viktoria-jakubovicova.jpg"},
			],

			whoImgs: [origAssets + "images/wezeo.svg", origAssets + "images/power.svg", origAssets + "images/siemens.svg", origAssets + "images/spsit.svg", origAssets + "images/spse.svg", origAssets + "images/hemisfera.svg"],

			podcastPlatforms: [
				{href: "https://www.youtube.com/c/Modern%C3%A1%C5%A1kola", imgSrc: origAssets + "images/youtube-color.svg"}, 
				{href: "https://open.spotify.com/show/7x8hnF8aX7LYbPsU155dJs", imgSrc: origAssets + "images/spotify.svg"}, 
				{hred: "https://podcasts.apple.com/sk/podcast/modern%C3%A1-%C5%A1kola/id1594689894", imgSrc: origAssets + "images/podcast.svg"}, 
				{href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL21vZGVybmFza29sYS9mZWVkLnhtbA", imgSrc: origAssets + "images/google.svg"}
			],

			supporters: [...new Array(10)].map((obj, i) => origAssets + "images/support" + ++i + ".svg"),
		}
	}
}
</script>

<style lang="scss" scoped>
#mainVisual {
	.text {
		z-index: 1;
	}
}

#vision {
	.rounded {
		width: 234px;
		height: 184px;

		&:nth-child(1n) {
			color: #5b94d7;
			background-color: rgba(221, 236, 251, 0.4);
		}

		&:nth-child(2n) {
			color: #5cc19a;
			background-color: rgba(156, 238, 204, 0.4);
		}

		&:nth-child(3n) {
			color: #dbca68;
			background-color: rgba(238, 226, 156, 0.4);
		}

		&:nth-child(4n) {
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

section .container.border-bottom {
	border-color: #d7eaff !important;
}

#studentProjects {
	p.position-relative::before {
		content: "";
		width: 50px;
		height: 1px;
		background: gray;
		position: absolute;
		bottom:-25px;
	}
}

#special {
	@media (min-width: 992px) {
		.col-lg-4 {
			max-width: 28%;
		}
	}
}

#supporters {
	.d-grid {
		grid-template-columns: repeat(5, 1fr);

		@media (max-width: 992px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}

#instagram {
	img:hover {
		filter: brightness(60%);
	}
}

#newsletter {
	input {
		height: 40px;
		outline: none;
	}

	img[role=button] {
		top: 25%;
		right: 25px;
	}
}
</style>