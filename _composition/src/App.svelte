<script>
	import Card from './card.svelte';
	import ContactCard from './contact-card.svelte';
</script>

<svelte:options tag="x-app" />

<x-card>
	<span slot="name">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>
</x-card>

<x-contact-card name="P. Sherman" address="42 Wallaby Way, Sydney" />