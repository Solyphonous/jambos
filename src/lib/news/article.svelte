<script>
	export let article;

	var date = new Date(Number(article.name))
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
	
</script>

<a href="news/{article.name}">
	<div class="article">
		<div class="image-container">
			<img src={article.thumbnail ? article.thumbnail : '/images/nathan.webp'} alt="" />
		</div>
		<p>{article.title}</p>
		<p>by <b>{article.author}</b></p>
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
