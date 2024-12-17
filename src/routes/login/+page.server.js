// Login server

import bcrypt from "bcrypt"

function getJWT(username, passhash) {
    
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(username, password)

	}
};