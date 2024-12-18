<script>
    export let toast
</script>

{#if (toast)}

<h1>{toast}</h1>

{/if}

<style>
    h1 {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        margin: auto;
        margin-bottom: 50px;
        padding-left: 5px;
        padding-right: 5px;
        z-index: 9999;
        background-color: black;
        outline-style: solid;
        outline-color: white;
        outline-width: 3px;
    }
</style>