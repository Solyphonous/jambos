<script>
    import Redirector from "../lib/redirector.svelte";
    import Header from "../lib/header.svelte";
    import Maincontent from "../lib/maincontent.svelte";
</script>

<Redirector />
<Header />

<Maincontent>
    <slot />
</Maincontent>