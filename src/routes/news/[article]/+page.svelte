<script>
	export let data;

	var date = new Date(Number(data.name));
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
</script>

<head>
	<title>The Jambos Casa - {data.title}</title>
	<meta content="Jambonian News: {data.title}" property="og:title" />
	<meta content={data.thumbnail} property="og:image" />
</head>

<h1>{data.title}</h1>
<h2>by {data.author}</h2>
<p><b>{datestring}</b></p>
<div>{@html data.content}</div>
