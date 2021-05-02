<script>
    // import Card from './card.svelte'
    import './card.svelte'
	import './button.svelte'

    export let name ="blub"
    export let address="blub"
	export let email="blub"
</script>

<svelte:options tag="x-contact-card" />

<x-card>
	<span slot="name">
		{name}
	</span>

	<span slot="address">
		{address}
	</span>

	<span slot="email">
		<x-button>{email}</x-button>
		<!-- <button>{email}</button> -->
	</span>
</x-card>