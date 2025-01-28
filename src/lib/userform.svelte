<!-- User form component. Used anywhere a username and password box is needed i.e. on login and sign up pages -->

<script>
    export let actionName
</script>

<form method="POST">
    <label for="username">
        Username
        <input name="username" type="text" required>
    </label>

    <label for="password">
		Password
		<input name="password" type="password" required>
	</label>
    <br>
    <button>{actionName}</button>
</form>

<style>
    form, label, input {
        display: block;
    }

    label, input, button {
        font-size: 2rem;
    }

    input {
        background-color: black;
        border-color: white;
        color: white;
    }

    form {
        margin: auto;
        max-width: 80%;
    }
</style>