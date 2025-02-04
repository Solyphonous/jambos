<script>
	export let data;

	import '../app.css';
	import Redirector from '../lib/redirector.svelte';
	import Header from '../lib/header.svelte';

	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	let currentpath = browser ? window.location.pathname : '/';

	if (browser) {
		afterNavigate(() => {
			currentpath = window.location.pathname;
		});
	}

	$: pagetitle = currentpath.slice(1).charAt(0).toUpperCase() + currentpath.slice(2);

	$: {
		if (pagetitle == '') {
			pagetitle = 'Home';
		}
	}

	$: isArticle = /News\/.+/.test(pagetitle);
</script>

<head>
	{#if !isArticle}
		<title>The Jambos Casa - {pagetitle}</title>
	{/if}

	<meta content="/images/jambojudah.png" property="og:image" />
</head>

<Redirector />
<Header token={data.token} />

<main>
	<slot />
</main>
