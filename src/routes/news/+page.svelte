<script>
	export let data;
	import Article from '../../lib/news/article.svelte';

	function click() {
		alert("sorry this dont work yet but maybe eventually")
	}

</script>

<h1>News</h1>
<p><i>Certified most best jambonian news source of the millenium by Jambos INC.</i></p>
<hr>
<p>Love jambos? Pressing here for notifications EVERY time there is news article!!!</p>
<button on:click={click} class="center-horizontally">yes please. I would love that.</button>
<br>

<div class="article-grid">
	{#each data.articles as article}
		<Article {article} />
	{/each}
</div>
