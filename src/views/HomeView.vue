<template>
	<A-site-header />

	<Z-main-navbar v-bind="nav">
		<template #sideMenu>
			<div class="nav-side-menu">
				<p class="side-header-text mx-5">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
				<a href="https://discord.com/invite/Y6xrdTvjFn" class="join-discord-btn mx-3 btn btn-sm rounded-pill d-flex justify-content-center align-items-center">OPENLAB COMMUNITY
					<img class="ms-1" :src="origAssets + 'images/discord.svg'" alt="discord">
				</a>
			</div>
		</template>
	</Z-main-navbar>

	<Z-main-jumbotron class="bg-primary mb-5" :mainImg="origAssets + 'images/main-home.png'" :shape="origAssets + 'images/o_letter.png'">
		<h1 class="text-white fw-light">Inštitút stredoškolského odborného vzdelávania
			<br>
			<span class="fw-bold">zameraný na IT &amp; AI</span>
		</h1>
		<p class="text-white mt-4 me-4">Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
	</Z-main-jumbotron>

	<Z-grid-section id="why" class="py-5" rowClass="justify-content-center text-center">
		<div class="col-12">
			<h1 class="fw-light mb-5">Prečo 
				<span class="fw-bold">OpenLab?</span>
			</h1>
			<p class="mx-5 mb-5 text-secondary">V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.</p>
		</div>
		<div v-for="card in whyCards" :key="card" class="col-md-4 col-lg-3 pt-5">
			<Z-icon-card v-bind="card"/>
		</div>
	</Z-grid-section>

	<Z-grid-section id="vision" class="py-5">
		<div class="col-lg-5 my-5">
			<h1 class="fw-light mb-5">Naša vízia
				<b class="fw-bold">v OpenLabe</b>
			</h1>
			<p class="mb-4 text-secondary">Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.</p>
			<p class="text-secondary">Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.</p>
		</div>
		<Z-count-cells-flow class="col-lg-7 justify-content-center justify-content-lg-end" cellClass="d-flex flex-column justify-content-end cell-variants" :cells="visionCells"/>
	</Z-grid-section>

	<Z-grid-section id="labs" class="py-5" rowClass="justify-content-center align-items-center">
		<div class="col-md-12 col-xl-4 text-start mb-5 mb-xl-0">
			<h1 class="fw-light">V akých laboch
				<br>
				<span class="fw-bold">možeš študovať?</span>
			</h1>
		</div>
		<div class="col-lg-8 card-group">
			<Z-link-card v-for="card in labsCards" :key="card" v-bind="card" role="button"/>
		</div>
	</Z-grid-section>

	<Z-grid-section id="schools" class="py-5 position-relative" containerClass="p-2" rowClass="justify-content-evenly">
		<div class="col-lg-12 text-center">
			<h1 class="fw-light mb-5">
				<span class="fw-bold">Nachádzame sa</span>
				na dvoch školách
			</h1>
		</div>
		<div v-for="school in schools" :key="school" class="col-lg-5">
			<Z-ad-card class="border-0 bg-transparent z-1" v-bind="school"/>
		</div>
		<template #outer>
			<img class="overflow-hidden shape-right position-absolute d-none d-md-block myimg" :src="origAssets + 'images/p_letter.png'" alt="shape">
		</template>
	</Z-grid-section>

	<Z-grid-section id="want" class="bg-primary-lighter pt-5">
		<div class="col-12 col-lg-5 py-5">
			<h1 class="fw-bold">Chceš ísť študovať odbor
				<br>
				<span class="fw-light">kompletne zameraný na IT?</span>
			</h1>
			<h5 class="fw-bold mt-5 mb-3 position-relative">Programovanie digitálnych technológií
				<p class="position-absolute m-0 display-3 fw-bold opacity-05 text-secondary">2573M</p>
			</h5>
			<p class="text-secondary">Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.</p>
			<p class="text-secondary pt-2">Staň sa súčasťou tohto inovatívneho študijného programu aj ty!</p>
			<button class="btn btn-big w-50 btn-primary px-3 mt-4" @click="gotoSite('https://pdt.openlab.sk/')">Chcem vedieť viac</button>
		</div>
		<div class="col-lg-7 d-none d-lg-flex align-items-end">
			<img class="img-fluid" :src="origAssets + 'images/students.png'" alt="img">
		</div>
	</Z-grid-section>

	<Z-grid-section id="join" class="py-5" containerClass="pt-5">
		<div class="text-center pt-5 mb-5">
			<h1 class="fw-light">Pridajte sa k nám
				<br>
				<span class="fw-bold">My všetci sme OpenLab…</span>
			</h1>
		</div>
		<div class="card-group">
			<Z-link-card v-for="card in joinCards" :key="card" v-bind="card" href="https://www.facebook.com/"/>
		</div>
	</Z-grid-section>

	<Z-grid-section id="studentProjects" class="py-5 position-relative" containerClass="border-bot-blue">
		<div class="text-center py-4">
			<h1 class="fw-light">Pozrite si
				<span class="fw-bold">študentské projekty</span>
			</h1>
			<p class="text-secondary m-5 px-0 px-lg-5">Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a celú spoločnosť vpred.</p>
		</div>
		<Z-link-card class="mb-5 no-hover-shadow always-hover bg-transparent" title="Projekty študentov v <b class='fw-bold'>OpenLabe</b>" titleClass="h6 mt-3 mb-5 position-relative small-underline" hrefText="Pozrieť si všetky projekty" href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw" noPadding/>
		<template #outer>
			<img class="overflow-hidden shape-left position-absolute d-none d-md-block z--1" :src="origAssets + 'images/a_letter.png'" alt="shape">
		</template>
	</Z-grid-section>

	<Z-grid-section id="special" class="py-5" containerClass="border-bot-blue py-5" rowClass="justify-content-center">
		<div class="col-12 text-center mb-4">
			<h1 class="fw-light">Čím sme <b class="fw-bold">výnimoční?</b></h1>
		</div>
		<div v-for="card in specialsCards" :key="card" class="col-lg-4 pt-5 px-4">
			<Z-icon-card v-bind="card" imgClass="ms-0" titleClass="my-2 mb-3"/>
		</div>
	</Z-grid-section>

	<Z-grid-section id="meetUs" class="py-5">
		<div class="col-12 text-center">
			<h1 class="fw-bold mb-5">Spoznaj nás</h1>
		</div>
		<div v-for="card in usCards" :key="card" class="col-6 col-lg-3 mb-4">
			<Z-profile-card v-bind="card" class="border-0"/>
		</div>
	</Z-grid-section>

	<Z-grid-section id="supportUs" class="py-5" rowClass="align-items-center">
		<div class="col-lg-6">
			<img class="img-fluid mb-2" :src="origAssets + 'images/people.png'" alt="img">
		</div>
		<div class="col-lg-6">
			<Z-link-card class="always-hover no-hover-shadow" title="<h2 class='fw-bold mb-4'>Podporte nás</h2>" textClass="mb-5" hrefText="Chcem podporiť" href="https://www.ludialudom.sk/profil/detail/41588" noPadding>
				OpenLab postupne rozširujeme ako neziskový vzdelávací projekt s cieľom otvoriť OpenLab-y zamerané na rôzne IT technológie na čo najväčší počet škôl vo všetkých slovenských regiónoch. Veríme, že OpenLab bude natoľko úspešný, že sa stane štandardom vzdelávania na Slovensku!
			</Z-link-card>
		</div>
	</Z-grid-section>

	<Z-grid-section id="whoBehind" class="py-5" containerClass="py-4" rowClass="align-items-center">
		<div class="col-lg-5">
			<h1 class="fw-light mb-5 m-lg-0">Kto stojí
				<br>
				<span class="fw-bold">za Openlabom?</span>
			</h1>
		</div>
		<Z-img-flow class="col-lg-7 justify-content-evenly align-items-center" imgClass="my-3 m-0 me-lg-5" :imgs="whoImgs"/>
	</Z-grid-section>

	<section id="instagram" class="py-5 my-5 row flex-wrap">
		<img v-for="i in 6" :key="i" class="col-2 p-0 img-fluid" src="https://openlab.sk/wp-content/uploads/spotlight-insta/17958348493693799-s.jpg">
	</section>

	<Z-grid-section id="modernSchool" class="py-5" rowClass="align-items-center">
		<div class="col-lg-6 pe-5 order-2 order-lg-0">
			<h1 class="fw-light mb-5 m-lg-0">Nie je moderná škola
				<br>
				<span class="fw-bold">ako moderná škola</span>
			</h1>
			<p class="text-secondary mt-3 mb-4">Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je rozobrať svet štandardného vzdelávania a spôsob ako môže fungovať moderné vzdelávanie v technológiach.</p>
			<Z-img-flow class="mb-4 align-items-center" imgClass="me-3" :imgs="podcastPlatforms"/>
			<button class="btn btn-primary btn-big w-50" @click="$router.push('/moderna-skola')">Moderná škola</button>
		</div>
		<div class="col-lg-6">
			<img class="img-fluid mb-5 mb-lg-0" :src="origAssets + 'images/modern.png'" alt="modern school">
		</div>
	</Z-grid-section>

	<Z-grid-section id="supporters" class="py-5" containerClass="py-4">
		<h1 class="fw-light text-center mb-5">Ďakujeme za
			<span class="fw-bold">podporu v roku 2021!</span>
		</h1>
		<Z-img-flow class="pt-4" imgClass="mx-3 my-3 my-lg-0" wrapperClass="d-flex justify-content-center align-items-center" :imgs="supporters" :cols="innerWidth > 940 ? 5 : 2"/>
	</Z-grid-section>

	<Z-grid-section id="newsletter" class="py-5" containerClass="p-5 mb-5 bg-primary-light rounded-3" rowClass="align-items-center">
		<div class="col-lg">
			<h5 class="fw-light m-0 ps-lg-4">Prihláste sa do nášho newslettra a budete mať
				<br>
				<span class="fw-bold">čerstvé informácie o živote v OpenLabe.</span>
			</h5>
		</div>
		<div class="col-lg">
			<Z-valid-input placeholder="Sem napíš tvoj e-mail" :confirmImg="origAssets + 'images/send.svg'" pattern="\S+@\S+\.\S+"/>
		</div>
	</Z-grid-section>

	<Z-page-footer v-bind="footer" shapeClass="d-none d-sm-block"/>
</template>

<script>
import ZLinkCard from "@/components/cards/ZLinkCard.vue";
import ZGridSection from "@/components/layout/ZGridSection.vue";
import ZIconCard from "@/components/cards/ZIconCard.vue";
import ZAdCard from "@/components/cards/ZAdCard.vue";
import ZCountCellsFlow from "@/components/layout/ZCountCellsFlow.vue";
import ZProfileCard from "@/components/cards/ZProfileCard.vue";
import ZImgFlow from "@/components/layout/ZImgFlow.vue";
import ZValidInput from "@/components/ZValidInput.vue";

const origAssets = "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/";

export default {
	components: {ZLinkCard, ZGridSection, ZIconCard, ZAdCard, ZCountCellsFlow, ZProfileCard, ZImgFlow, ZValidInput},

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
					title: "Stredná Priemyselná Škola Elektrotechnická", 
					loc: "Hálova 16, Bratislava", 
					imgSrc: origAssets + "/images/school1.png", 
					href: "https://spsehalova.sk/"
				},
				{
					title: "Stredná Priemyselná Škola Informačných Technológií", 
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

			supporters: [...Array(10)].map((obj, i) => origAssets + "images/support" + ++i + ".svg")
		}
	}
}
</script>

<style lang="scss">
#vision {
	.cell-variants {
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
	}
}

section .container.border-bot-blue {
	border-bottom: 1px solid #d7eaff;
}

#want {
	p.display-3 {
		top: -0.75em;
	}
}

#studentProjects {
	.small-underline::before {
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

#instagram {
	img:hover {
		filter: brightness(60%);
	}
}
</style>