import { redirect } from "@sveltejs/kit"

export function load( { request, cookies} ) {
    cookies.delete("login", { path: "/" })
    redirect(303, "/login")
}