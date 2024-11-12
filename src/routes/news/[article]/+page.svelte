<script>
    export let data
</script>

<head>
    <title>The Jambos Casa - {data.title}</title>
</head>

<h1>{data.title}</h1>
<h2>by {data.author}</h2>
<div>{@html data.content }</div>