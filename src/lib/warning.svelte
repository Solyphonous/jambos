<script>
    export let toast

    var showToast = true
    setTimeout(() => {
        showToast = false
    }, 5000);
</script>

{#if (toast && showToast)}

    <h2 id="toast">{toast}</h2>

{/if}

<style>
    h2 {
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