<!-- User form component. Used anywhere a username and password box is needed i.e. on login and sign up pages -->

<form method="POST">
    <label for="username">
        Username
        <input name="username" type="text" required>
    </label>

    <label for="password">
		Password
		<input name="password" type="password" required>
	</label>
    <button>Log in</button>
</form>

<style>
    form, label, input {
        display: block;
    }
</style>