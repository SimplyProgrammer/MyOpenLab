<template>
	<footer class="py-5 position-relative overflow-hidden">
		<div class="container">
			<div class="row align-items-end text-secondary">
				<div class="col-6 col-lg-4">
					<img src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/openlab-logo.svg">
					<p class="m-0 mt-2">© 2022 Všetky práva vyhradené <b>OPENLAB, o.z.,</b></p>
				</div>
				<div class="col-6 col-lg-3">
					<p class="m-0">IČO: 50764675</p>
					<p class="m-0">Viedenská cesta 257, 805 01 Bratislava</p>
				</div>
				<div class="col-6 col-lg-2">
					<a class="m-0 text-secondary" href="mailto:info@openlab.sk">info@openlab.sk</a>
				</div>
				<div class="col-6 col-lg-3 d-flex justify-content-end">
					<a v-for="contact in contacts" :key="contact" :href="contact.href">
						<img class="mx-2" :src="contact.imgSrc">
					</a>
				</div>
			</div>
		</div>
		<img class="position-absolute top-50" src="https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/footer.svg" alt="footer">
	</footer>
</template>

<script>
export default {
	data() {
		return {
			contacts: [
				{imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/facebook.svg", href: "https://www.facebook.com/OpenLab.sk/"}, 
				{imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/linkedin.svg", href: "https://www.instagram.com/openlab.sk/?igshid=1xz2g75a3yzu1"},
				{imgSrc: "https://openlab.sk/wp-content/themes/wp-bootstrap-starter/assets/images/instagram.svg", href: "https://www.linkedin.com/company/openlab-sk/?trk=public_profile_topcard_current_company&amp;originalSubdomain=sk"},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
footer {
	p, a {
		font-size: 11.5px;
	}

	img.position-absolute {
		z-index: -1;
		right: 0;
	}
}
</style>