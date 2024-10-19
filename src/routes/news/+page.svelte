<script>
    export let data
    import Article from '../../lib/news/article.svelte';
</script>

{#each data.articles.reverse() as article}
    <Article article={article}/>
{/each}