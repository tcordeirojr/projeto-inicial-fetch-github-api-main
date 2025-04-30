import { baseUrl } from "../variables.js"

async function followers(userName) {
    const response = await fetch(`${baseUrl}/${userName}/followers`)
    return await response.json()
}


export { followers }