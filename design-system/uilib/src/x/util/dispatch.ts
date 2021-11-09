import { createEventDispatcher } from 'svelte';
import { get_current_component } from "svelte/internal";

const component = get_current_component()
const svelteDispatch = createEventDispatcher()

export function dispatch(name, detail = null) {
    svelteDispatch(name, detail)
    component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
}