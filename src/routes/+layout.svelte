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

<svelte:head>
	{#if !isArticle}
		<title>The Jambos Casa - {pagetitle}</title>
		<meta content="/images/jambojudah.png" property="og:image" />
	{/if}
</svelte:head>

<Redirector />
<Header token={data.token} />

<main>
	<audio autoplay="true" volume="0.1" src="audio/jam.mp3"></audio>
	<slot />
</main>
