<script>
    export let article
</script>

<div class="article">
    <a href="news/{article.title}">
        <div class="image-container">
            <img src="{article.thumbnail ? article.thumbnail : "/images/nathan.webp"}" alt="">
        </div>
        <p>{article.title}</p>
        <p>by <b>{article.author}</b></p>
    </a>
</div>

<style>
    .article {
        border-style: dashed;
        border-width: .2rem;
        border-color: white;
        margin: 1rem;
    }
    .image-container {
        height: 10rem;
        width: 20rem;
        overflow: hidden;
        padding: .5rem;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
</style>