<script lang="ts">
    import type { RadioButtonItem } from './radio-button-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"
    import { makeEvent } from '../../x/util/dispatch'

    let selected = '20';
	
	function onChange(value) {
        console.log(value)
		selected = value;
	}

    $: selectedItemValue = "";

	// function handleClick(value) {
    //     selectedItemValue = value;
	// 	makeEvent('select', {
	// 		value
	// 	})
	// }

    const _disabled = false
    const _error = false

    export let items: RadioButtonItem[] = []

</script>

<svelte:options tag="dpdhl-radio-group" />

    {#each items as item}
        <span class="container" on:click={() => onChange(item.value)}>
            <input 
                checked={selected===item.value} 
                type="checkbox" 
                name="amount" 
                value={item.value} />
            <span 
                class="checkmark" 
                class:disabled={_disabled}
                class:error={_error}>
            </span>
            <span class="label">{item.label}</span>
        </span>
    {/each}
    <!-- {#each items as item}
        <span class="item" on:click={() => handleClick(item.value)}>
            <dpdhl-typography variant="body1">
                {item.label}
            </dpdhl-typography>
        </span>
    {/each} -->
    <p>Selected: {selected}</p>



<!-- <container class="container">
	<input 
		type="checkbox" 
		bind:checked={_checked}
		on:change={handleClick}
		id={_name}
		name={_name}>
	<span 
		class="checkmark" 
		class:disabled={_disabled}
		class:error={_error}></span>
	<span class="label">
		<slot name="label"/>
	</span>
</container> -->


<style>
	/* Hide the browser's default radio button */
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Customize the container */
	.container {
		display: block;	
		position: relative;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		height: 24px;
	}

	.label {
		position: absolute;
		padding-top: 2px;
		padding-left: 40px;
		font-size: 16px;
	}

	/* Create a custom radio button */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 22px;
		width: 22px;
		color: var(--color-postyellow);
		border-radius: 50%;
		border: 1px solid var(--color-gray45);
	}

	.checkmark.error {
		border-color: var(--color-dhlred);
	}

	.checkmark.disabled {
		background-color: var(--color-gray10);
	}

	/* On mouse-over, add a grey background color */
	.container:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the radio button is checked, display a checkmark */
	.container input:checked ~ .checkmark {
		color: var(--color-postyellow);
	}

	/* Checkmark when not checked */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the circle when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
		color: var(--color-postyellow);
	}

	/* Style the circle */
	.container .checkmark:after {
		top: 6px;
		left: 6px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-postyellow);
	}

		/* Style the circle */
	.container .checkmark.disabled:after {
		background: var(--color-gray20);
	}


</style>

<!-- 
<style>

    .container {
        display: flex;
        flex-direction: column;
    }

    .item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      14px;
        line-height:    8px;
        cursor:         pointer;
    }

    .item:last-child {
        border-right:   none;
    }

    .item.selected {
        background-color: var(--color-postyellow);
    }

    .item:hover {
    
    }

</style> -->