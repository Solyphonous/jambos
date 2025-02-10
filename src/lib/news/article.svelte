<script>
	export let article;

	const articleValue = JSON.parse(article.value);

	var date = new Date(Number(article.key));
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
</script>

<a href="news/{article.key}">
	<div class="article" style={articleValue.styling}>
		<div class="image-container">
			<img src={articleValue.thumbnail ? articleValue.thumbnail : '/images/nathan.webp'} alt="" />
		</div>
		<p>{articleValue.title}</p>
		<p>by <b>{articleValue.author}</b></p>
		<h5>{datestring}</h5>
	</div>
</a>

<style>
	.article {
		border-style: dashed;
		border-width: 0.2rem;
		border-color: white;
		margin: 1rem;
	}
	.image-container {
		height: 10rem;
		width: 20rem;
		overflow: hidden;
		padding: 0.5rem;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
</style>
