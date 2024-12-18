export function POST({ cookies }) {
    cookies.delete("token", { path: "/" })
    return new Response(null, { status: 200})
}