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

    <meta content="images/jambojudah.png" property="og:image" />
</head>

<Redirector />
<Header />

<main>
    <slot />
</main>