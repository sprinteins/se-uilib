<script lang="ts">
    /**
     * A Toast Component
     * @component
     */

    /**
     * Type of the toast: Error, Notification
     */
    import { Type } from './type'

	export let isOpen = true;
    $: _isOpen = isOpen;

    export let message;
    $: _message = message;

    export let title;
    $: _title = title || "No title provided";

    let toast: HTMLElement

	function closeToast() {
        toast.dispatchEvent(new Event('closeToast', {
            bubbles: true,
            composed: true,
        }))
	}

    export let type: string = Type.Error;

</script>
<svelte:options tag="dpdhl-toast" />

{#if _isOpen}
    <main
        class:notification = { type === Type.Notification }
        class:error = { type === Type.Error }
        bind:this={toast}
        >
        <div class="flex-container">
            <div class="title">
                {_title}
            </div>
            {#if _message}
                <div class="message">
                    {_message}
                </div>
            {/if}
        </div> 
        <dpdhl-icon on:click={closeToast} width={16} height={16} color='#FFF' icon="cancel" />
    </main>
{/if}


<style>
    main{
        display:        flex;
        flex-direction: row;
        align-items:    center;
        padding:        var(--padding-top-bottom) var(--padding-left-right);
        justify-content: space-between;
    }

    main.notification {
        color:         white;
        background-color: var(--color-green-dark);
    }
    main.error {
        color:         white;
        background-color: var(--color-dhlred);
    }

    .title {
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    .message {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        padding: 0;
        margin: 0;
    }

    /* .icon { } */

    div.flex-container{
        display: flex;
        flex-direction: column;
    }
</style>
