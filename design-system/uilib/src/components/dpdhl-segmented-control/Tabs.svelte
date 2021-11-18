<script context="module">
	export const TABS = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const tabs = [];
	const selectedTab = writable(null);

	setContext(TABS, {
		registerTab: tab => {
			tabs.push(tab);
			selectedTab.update(current => current || tab);
			
			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);
				selectedTab.update(current => current === tab ? (tabs[i] || tabs[tabs.length - 1]) : current);
			});
		},

		selectTab: tab => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
		},
		selectedTab,
	});
</script>

<div class="tabs">
    <div class="tab-list">
	    <slot></slot>
    </div>
</div>

<style>
    .tab-list {
		border-bottom: 1px solid teal;
	}
</style>