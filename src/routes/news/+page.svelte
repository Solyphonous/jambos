<script>
    export let data
    import Article from '../../lib/news/article.svelte';
</script>

<div class="article-grid">
    {#each data.articles as article}
        <Article article={article}/>
    {/each}
</div>

<style>
    .article-grid {
        display: flex;
        justify-content: center;
        width: auto;
        flex-wrap: wrap;
    }
</style>