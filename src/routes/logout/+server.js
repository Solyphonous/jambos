export function POST({ cookies }) {
    cookies.delete("login", { path: "/" })
}