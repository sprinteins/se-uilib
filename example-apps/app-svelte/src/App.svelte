<script lang="ts">
	
	import '@sprinteins/dpdhl-uilib'

	let items = [
        { label:'Menu 1', click: () => alert('Menu 1') },
        { label:'Menu 2', click: () => alert('Menu 2') },
        { label:'Menu 3', click: () => alert('Menu 3') },		
    ]

</script>

<main>
		<dpdhl-theme-desktop>
			<div class="container">
				<dpdhl-button type="primary">Button</dpdhl-button>
				<dpdhl-menu items={items} />
				<dpdhl-card>  
						<h3 slot="header">
							Card Header
						</h3>
						<div slot="content">
							Amet nulla facilisi morbi tempus iaculis 
							urna id volutpat lacus. Sed faucibus turpis in 
							eu mi bibendum. Amet consectetur adipiscing elit 
							pellentesque habitant morbi tristique.
						</div>
						<div slot="footer" class="footer" >
							<dpdhl-button type="text"> Main Action </dpdhl-button>
						</div>
				</dpdhl-card>
			</div>
		</dpdhl-theme-desktop>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
