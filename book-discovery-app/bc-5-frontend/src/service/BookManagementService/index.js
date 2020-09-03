import { urls } from '../../utils/constants'

var backend_url = process.env.REACT_APP_BACKEND_HOST;
export const getAllBooks = async () => {
    const books = await fetch(urls.getAllBooksUrl + '?_limit=30&_expand=author&_expand=category', {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            accept: "application/json",
        },
    })
    return books.json()
}

export const getBooksReading = async () => {
    const books = await fetch(backend_url+`/users/1/bookshelf`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
        })
    return books.json()
}

export const getBookById = async (id) => {

    const book = await fetch(backend_url+`/books/${id}`)


    return book.json()
}


export const getBookShelfByUserIdAndBookId = async (userId, bookId) => {
    console.log("getting book shelf")
    const bookShelf = await fetch(backend_url+`/users/${userId}/books/${bookId}`)
    return bookShelf.json();
}

export const postBookShelfService = async(userId, requestBody) => {
    console.log("post bookshelf")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    const response = await fetch(backend_url+`/users/${userId}/bookshelf/`, requestOptions);
    return response.json();
}


export const putBookShelfService = async(userId, bookShelfId, requestBody) => {
    console.log("put bookshelf")
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    const response = await fetch(backend_url+`/users/${userId}/bookshelf/${bookShelfId}`, requestOptions);
    return response.json();
}

