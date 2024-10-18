<script>
    import '../app.css';
    import Redirector from "../lib/redirector.svelte";
    import Header from "../lib/header.svelte";
</script>

<Redirector />
<Header />

<main>
    <slot />
</main>