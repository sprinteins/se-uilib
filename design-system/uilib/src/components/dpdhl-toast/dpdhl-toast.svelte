<svelte:options tag="dpdhl-toast" />

<script lang="ts">
	/**
	 * A Toast Component
	 * @component
	 */

	/**
	 * Type of the toast: Error, Notification
	 */
	import { Type } from "./type";

	export let open = true;
	$: _open = open;

	export let message;
	$: _message = message;

	export let type: string = Type.error;
	export let fullWidth: boolean = true;

	export let title;
	$: _title = title || "No title provided";

	let toast: HTMLElement;
	function closeToast() {
		toast.dispatchEvent(
			new Event("closeToast", {
				bubbles: true,
				composed: true,
			})
		);
	}
</script>

{#if _open}
	<main
		class:notification={type === Type.notification}
		class:error={type === Type.error}
		class:full-width={fullWidth}
		bind:this={toast}
	>
		<div class="content-container">
			<slot name="icon" />
			<div class="text-container">
				<div class="title">
					{_title}
				</div>
				{#if _message}
					<div class="message">{_message}</div>
				{/if}
			</div>
		</div>
		<dpdhl-icon
			on:click={closeToast}
			width={16}
			height={16}
			color="#FFF"
			icon="cancel"
			class="close-icon"
		/>
  	</main>
{/if}

<style>
	main {
		display: 			flex;
		flex-direction: 	row;
		align-items: 		center;
		justify-content: 	space-between;
		padding: 			var(--padding-top-bottom) var(--padding-left-right);
		padding-top: 		var(--toast__padding-top, 1.125rem);
		padding-bottom: 	var(--toast__padding-bottom, 1.125rem);
		padding-left: 		var(--toast__padding-left, 1.125rem);
		padding-right: 		var(--toast__padding-right, 1.125rem);
	}

	main.full-width {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		flex-grow: 1;
	}

	main.notification {
		color: 				var(--toast__color, var(--color-white));
		background-color: 	var(--color-green-dark);
	}

	main.error {
		color: 				var(--toast__color, var(--color-white));
		background-color: 	var(--color-dhlred);
	}

	.title {
		font-size: 		var(--font-size);
		line-height: 	var(--line-height);
		font-weight: 	700;
		padding: 		0;
		margin: 		0;
	}

	.message {
		font-size: 		calc(var(--font-size) * 0.875);
		line-height: 	var(--line-height);
		font-weight: 	400;
		padding: 		0;
		margin: 		0;
	}

	div.text-container {
		display: 		flex;
		flex-direction: column;
	}

	div.content-container {
		display: 		flex;
		flex-direction: row;
		gap: 			0.75rem;
	}

	.close-icon {
		cursor: 		pointer;
	}
</style>
