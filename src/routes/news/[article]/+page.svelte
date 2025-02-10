<script>
	import { onMount } from 'svelte';

	import Warning from '/src/lib/warning.svelte';

	export let data;
	export let form;

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

<div class="create-comment">
	<form method="POST">
		<label for="comment">
			Comment
			<hr>
			{#if data.token}
				<textarea name="comment" id="comment" placeholder="Start writing your comment..." rows=5 required></textarea>
				<input type="submit" value="Post">
			{:else}
				<p class="sign-in-please"><a href="/login?redirect=/news/{data.name}"><b>Sign in</b></a> to comment!</p>
			{/if}
		</label>
	</form>
</div>

<style>
	.create-comment {
		box-sizing: border-box;
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: clamp(400px, 80%, 80%);
		border: .2rem dashed white;

		margin-top: 2rem;
		margin-bottom: 2rem;

		padding: 1rem;
	}

	hr {
		border-top: 2px solid white;
	}

	p.sign-in-please {
		max-width: 100%;
	}
</style>

<Warning toast={form?.toast} />