<script>
    export let data
    import Article from '../../lib/news/article.svelte';
</script>

{#each data.articles as article}
    <Article article={article.name}/>
{/each}