import { urls } from '../../utils/constants'

export const getUserDetails = async () => {
    const books = await fetch(urls.getUserDetailsUrl + '/4', {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            accept: "application/json",
        },
    })
    console.log("user", books)
    return books.json()
}