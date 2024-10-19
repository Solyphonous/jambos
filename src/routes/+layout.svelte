<script>
    import '../app.css';
    import Redirector from "../lib/redirector.svelte";
    import Header from "../lib/header.svelte";

    import { browser } from "$app/environment"
    import { afterNavigate } from "$app/navigation"

    let currentpath = browser ? window.location.pathname : "/"

    if (browser) {
        afterNavigate(() => {
            currentpath = window.location.pathname;
        });
    }

    $: pagetitle = currentpath.substring(1).charAt(0).toUpperCase() + currentpath.substring(1).slice(1)

</script>

<head>
    {#if (pagetitle != "")}
        <title>The Jambos Casa - {pagetitle}</title>
    {:else}
        <title>The Jambos Casa - Home</title>
    {/if}
    
    <meta content="https://jambos.casa/images/jambojudah.png" property="og:image" />
    <meta property="og:image:width" content="1080">
    <meta property="og:image:height" content="1080">
</head>

<Redirector />
<Header />

<main>
    <slot />
</main>