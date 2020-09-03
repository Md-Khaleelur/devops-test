import React from 'react'
import { getUserDetails } from "../service/UserManagementService"
import currentlyReadingImage from '../../src/assets/currently_reading.svg'
import booksToReadImage from '../../src/assets/books_to_read.svg'
import booksReadImage from '../../src/assets/books_read.svg'
import targetImage from '../../src/assets/target.svg'

const baseUrl = 'https://bootcamp5-mockserver.herokuapp.com'

export const urls = {
    getAllBooksUrl: baseUrl + '/books',
    getUserDetailsUrl: baseUrl + '/users'
}

export const userReadStatus = {
    currentlyReading: 'CURRENTY READING',
    toRead: 'BOOKS TO READ',
    booksRead: 'BOOKS READ',
    target: 'TARGET PER YEAR'
}

export const overviewImages = {
    currentlyReading: currentlyReadingImage,
    toRead: booksToReadImage,
    booksRead: booksReadImage,
    target: targetImage
}

export const authorDescription = 'Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the'    