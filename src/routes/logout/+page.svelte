<script>
    import { goto } from "$app/navigation"
	import { onMount } from "svelte";

    async function logout() {
        await fetch("/logout", { method: "POST" })
        goto("/")
    }

    onMount(() => {
        logout()
    })    
</script>
