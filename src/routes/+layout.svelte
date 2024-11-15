<script>
    export let data;

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

    $: pagetitle = currentpath.slice(1).charAt(0).toUpperCase() + currentpath.slice(2)
    
    $: {
        if (pagetitle == "") {
            pagetitle = "Home"
        }
    }
    
    $: isArticle = /News\/.+/.test(pagetitle)

</script>

<head>
    {#if (!isArticle)}
        <title>The Jambos Casa - {pagetitle}</title>
    {/if}
    
    <meta content="/images/jambojudah.png" property="og:image" />
    <meta property="og:image:width" content="1080">
    <meta property="og:image:height" content="1080">
</head>

<Redirector />
<Header token={data.token}/>

<main>
    <slot />
</main>