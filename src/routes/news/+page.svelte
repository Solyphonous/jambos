<script>
	export let data;
	import Article from '../../lib/news/article.svelte';
</script>

<div class="article-grid">
	{#each data.articles as article}
		<Article {article} />
	{/each}
</div>
