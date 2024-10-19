<script>
    export let article
    let articlename = article.substring(0, article.indexOf("."))
</script>

<p>
    <a href="news/{articlename}">
        {articlename}
    </a>
</p>
