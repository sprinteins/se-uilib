<script context="module" lang="ts">
    export const EventRegister = 'registeritem'
    export function newRegisterEvent(detail?: any): CustomEvent {
        return new CustomEvent(
            EventRegister,
            {
                bubbles: true,
                composed: true,
                detail,
            },
        )
    }

    export const EventDeregister = 'deregister-item'
    export function newDeregisterEvent(detail?: any): CustomEvent{
        return new CustomEvent(
            EventDeregister, 
            {
                bubbles: true,
                composed: true,
                detail,
            },
        )
    }
</script>
<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import type { SidebarItem } from './sidebar-item'

    const id = Math.random().toString(36)

    export let label: string
    export let icon: string
    export let link: string

    let container: HTMLElement

    onMount(()=>{ 
        const detail: SidebarItem = {
            id,
            label,
            icon,
            link,
        }    
        container.dispatchEvent(newRegisterEvent(detail)) 
    })
    onDestroy(()=>{ container.dispatchEvent(newDeregisterEvent()) })

</script>

<svelte:options tag="dpdhl-sidebar-item" />

<div bind:this={container}>

</div>

