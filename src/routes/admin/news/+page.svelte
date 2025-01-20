<script>
    export let data
    $: title = "Article Title"
    $: content = `<p>Enter your article here...</p>`
</script>

<form method="POST">
    <label for="title">
        Title
        <input type="text" name="title" bind:value={title} required>
    </label>
    <br>
    <label for="image">
        Thumbnail resource
        <input type="text" name="image" placeholder="/images/nathan.webp" required>
    </label>
    <br>

    <textarea bind:value={content} name="" id="" rows=20 cols=100></textarea>
    <br>
    <button>Submit</button>
</form>

<div id="preview">
    <h1>{title}</h1>
    <h2>by {data.token.username}</h2>
    {@html content}
</div>