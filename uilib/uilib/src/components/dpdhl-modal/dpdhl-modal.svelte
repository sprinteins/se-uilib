<script lang="ts">
	import { onDestroy } from 'svelte';
    import '../dpdhl-card';


    export let cancelable = undefined;
    $: _cancelable = cancelable !== undefined;

    export let open = undefined;
    $: _open = open !== undefined;

    
	let modal: HTMLElement;

    const previously_focused = typeof document !== 'undefined' && document.activeElement as HTMLElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}

	function onKeydown(e:KeyboardEvent) {
		if ( _cancelable && e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll<HTMLElement>('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

            const activeElement = document.activeElement as HTMLElement;
			let index = tabbable.indexOf(activeElement);
			if (index === -1 && e.shiftKey) {
                index = 0;
            }

            // TODO: no-clever-code
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

    function close () {
        modal.dispatchEvent(new Event('close', {
            bubbles: true,
            composed: true,
        }))
    }

    function onBackgroundClick(){
        if( !_cancelable ){
            return;
        }

        close();
    }

	

</script>

<svelte:options tag="dpdhl-modal" />
<svelte:window on:keydown={onKeydown} />

{#if _open}
    <section>

        <div class="modal-background" on:click={onBackgroundClick}></div>

            <dpdhl-card role="dialog" aria-modal="true"  bind:this={modal}>  
                <h2 slot="header">
                      <slot name="header" />
                </h2>
                <div slot="content">
                      <slot />
                </div>
                <div slot="footer" class="footer" >
                      <slot name="actions" />
                </div>
            </dpdhl-card>
    </section>
{/if}

<style>
	.modal-background {
		position:     fixed;
		top:          0;
		left:         0;
		width:        100%;
		height:       100%;
		background: rgba(0,0,0,0.1);
	}

	dpdhl-card {
		position: absolute;
		left:     50%;
		top:      50%;
        
		max-width:  calc(100vw - 8em);
		width:      32em;
		max-height: calc(100vh - 4em);
		overflow-y: auto;
		transform:  translate(-50%,-50%)
	}

</style>