<script lang="ts">
    export let label = '';
    export let placeholder = '';
</script>

<svelte:options tag="dpdhl-input" />

<label>
    <span>{label}</span>
    <input placeholder={placeholder}/>
</label>