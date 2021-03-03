<script>

    export let user = {name:"World"}


    let rows = [0,1,2]


</script>

<svelte:options tag={"hello-world"}/>

<h1>Hello, {user.name}!</h1>


<div> greeting:<br/>
    <slot name="greeting">
        <span >Unknown greeting</span>
    </slot>
</div>

{#each rows as row}
    <div> name:<br/>
        <slot name="name">
            <span >Unknown name</span>
        </slot>
    </div>
{/each}