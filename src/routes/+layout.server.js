// Root server

export async function load({ locals }) {
    let token = locals.token
    return { token: token }
}