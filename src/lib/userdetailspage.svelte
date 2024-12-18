<script>
	import { onMount } from 'svelte';

    export let pageType

    const pageTitle = pageType == "login" ? "Log in" : "Sign up"
    const description = pageType == "login" ? "Fool, do you have not an account?! Worry not. <a style='font-weight: bold' href='signup'>Create it</a>" : "Fool, do you already haves account?! Worry not. <a style='font-weight: bold' href='login'>You log in</a>"

	import Userform from '/src/lib/userform.svelte';
	import { setBackground } from '/src/lib/background.js';

	onMount(() => {
		const undo = setBackground('url(images/eviljambobaby5.jpg)');
		return undo;
	});
</script>

<h1>{pageTitle}</h1>
<Userform actionName={pageTitle} />

<p>{@html description}</p>