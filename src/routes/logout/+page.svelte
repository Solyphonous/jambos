<script>
	import { onMount } from "svelte";

    async function logout() {
        await fetch("/logout", { method: "POST" })
        window.location = "/login"
    }

    onMount(() => {
        logout()
    })    
</script>
