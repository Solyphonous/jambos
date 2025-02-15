<script>
	export let article;

	var date = new Date(Number(article.key));
	var datestring = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
</script>

<a href="news/{article.key}">
	<div class="article" style={article.styling}>
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
		width: 20rem;
		transition: transform 0.1s;
	}

	.article:hover {
		transform: scale(1.1);
	}

	.image-container {
		height: 10rem;
		overflow: hidden;
		padding: 0.5rem;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	a:hover {
		background-color: black;
		color: white;
	}
</style>
