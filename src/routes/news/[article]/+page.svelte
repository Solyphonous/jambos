<script>
	import { onMount } from 'svelte';

	import Warning from '/src/lib/warning.svelte';

	export let data;
	export let form;

	const article = data.article;
	const comments = data.comments;

	var date = new Date(Number(article.name));
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

	onMount(() => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(article.content, 'text/html');
		const scripts = doc.querySelectorAll('script');

		scripts.forEach((script) => {
			const newScript = document.createElement('script');
			newScript.textContent = script.textContent;
			document.body.appendChild(newScript).remove();
		});
	});
</script>

<svelte:head>
	<title>The Jambos Casa - {article.title}</title>
	<meta content="Jambonian News: {article.title}" property="og:title" />
	<meta content={article.thumbnail} property="og:image" />
</svelte:head>

<h1>{article.title}</h1>
<h2>by {article.author}</h2>
<p><b>{datestring}</b></p>
<div>{@html article.content}</div>

<div class="create-comment">
	<form method="POST">
		<label for="comment">
			Comment
			<hr />
			{#if data.token}
				<textarea
					name="comment"
					id="comment"
					placeholder="Start writing your comment..."
					rows="5"
					required
				></textarea>
				<input type="submit" value="Post" />
			{:else}
				<p class="wide">
					<a href="/login?redirect=/news/{article.name}"><b>Sign in</b></a> to comment!
				</p>
			{/if}
		</label>
	</form>
</div>

{#each comments as comment}
	<div class="comment">
		<h2 class="wide">{comment.username}</h2>
		<p class="wide">{comment.content}</p>
		<h5 class="wide">{comment.createdAt}</h5>
		<hr />
	</div>
{/each}

<Warning toast={form?.toast} />

<style>
	.comment {
		margin-left: auto;
		margin-right: auto;
		max-width: clamp(400px, 80%, 80%);
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.create-comment {
		box-sizing: border-box;
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: clamp(400px, 80%, 80%);
		border: 0.2rem dashed white;

		margin-top: 2rem;
		margin-bottom: 2rem;

		padding: 1rem;
	}

	hr {
		border-top: 2px solid white;
	}
</style>
