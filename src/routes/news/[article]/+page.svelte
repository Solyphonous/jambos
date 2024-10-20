<script>
    export let data
</script>

<h1>{data.title}</h1>
<h2>by {data.author}</h2>
<div>{@html data.content }</div>