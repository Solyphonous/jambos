<script>
	export let data;
	export let form;

	import Warning from '/src/lib/warning.svelte';
	import Article from '/src/lib/news/article.svelte';

	$: title = 'Article Title';
	$: content = `<p>Enter your article here...</p>`;
	$: author = data.token.username;
	$: thumbnail = '';
	$: styling = '';

	$: dummyArticle = {
		title: title,
		name: Date.now(),
		author: author,
		thumbnail: thumbnail,
		styling: styling
	};
</script>

<form method="POST">
	<label for="title">
		Title
		<input type="text" name="title" bind:value={title} required />
	</label>
	<br />

	<label for="image">
		Thumbnail resource
		<input
			bind:value={thumbnail}
			type="text"
			name="thumbnail"
			placeholder="/images/nathan.webp"
			required
		/>
	</label>
	<br />

	<label for="styling">
		Styling (optional, use to augment default article component styling.)
		<input
			bind:value={styling}
			class="styling-input"
			type="text"
			name="styling"
			placeholder="border-style: dashed;border-width: 0.2rem;border-color: white;margin: 1rem;"
		/>
	</label>
	<br />

	<textarea bind:value={content} name="content" id="content" rows="20" cols="100"></textarea>
	<br />

	<button>Submit</button>
</form>

<div class="article-grid">
	<Article article={dummyArticle} />
</div>

<div id="preview">
	<h1>{title}</h1>
	<h2>by {author}</h2>
	{@html content}
</div>

<Warning toast={form?.toast} />
