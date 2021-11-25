<script lang="ts">
	
	import '@sprinteins/dpdhl-uilib'

</script>

<main>
		<dpdhl-theme-desktop>
			<dpdhl-button type="primary">in theme DPDHL</dpdhl-button>
		</dpdhl-theme-desktop>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
