<script>
	import { onMount } from 'svelte';

	export let data;

	var date = new Date(Number(data.name));
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

	onMount(() => {
		const parser = new DOMParser()
		const doc = parser.parseFromString(data.content, 'text/html')
		const scripts = doc.querySelectorAll('script')

		scripts.forEach(script => {
      		const newScript = document.createElement('script');
      		newScript.textContent = script.textContent;
			console.log(newScript.textContent)
      		document.body.appendChild(newScript).remove()
    	});
	}) 
</script>

<svelte:head>
	<title>The Jambos Casa - {data.title}</title>
	<meta content="Jambonian News: {data.title}" property="og:title" />
	<meta content={data.thumbnail} property="og:image" />
</svelte:head>

<h1>{data.title}</h1>
<h2>by {data.author}</h2>
<p><b>{datestring}</b></p>
<div>{@html data.content}</div>
