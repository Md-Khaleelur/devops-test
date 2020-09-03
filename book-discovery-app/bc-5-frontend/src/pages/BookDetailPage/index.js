import React, { useEffect, useState } from 'react'
import AboutAuthor from '../../components/organisms/AboutAuthor'
import BookCardList from '../../components/organisms/BookCardList'
import BookWidgetList from '../../components/organisms/BookCardWidgetList'
import BookDetailCard from '../../components/organisms/BookDetailCard'
import FollowingCard from '../../components/organisms/FollowingCard'
import ReviewCard from '../../components/organisms/ReviewCard'
import { getAllBooks, getBookById, getBookShelfByUserIdAndBookId, postBookShelfService, putBookShelfService } from '../../service/BookManagementService'
import BookDetailTemplate from '../../templates/BookDetailTemplate'

const booksList = [
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4.5',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4.5',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4.5',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4.5',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
]

export default function BookDetailPage(props) {
    const reviewsList = [<ReviewCard />, <ReviewCard />, <ReviewCard />]
    const followingReviewList = [<FollowingCard />, <FollowingCard />, <FollowingCard />]

    const [book, setBook] = useState({})
    const [recommendationsList, setRecommendations] = useState([])
    const [loading, setLoading] = useState(true)
    const [bookShelf, setBookShelf] = useState(null)

    const id = props.match.params.id

    const getBook = async () => {
        const book = await getBookById(id)
        setBook(book)
        console.log(book)
        setLoading(false)
    }

    const getRecommendations = async () => {
        const books = await getAllBooks()
        setRecommendations(books)
    }

    const getBookShelf = async (userId, bookId) => {
        const bookShelf = await getBookShelfByUserIdAndBookId(userId, bookId)
        setBookShelf(bookShelf ? bookShelf[0] : {})
    }

    const postBookShelf = async (userId, requestBody) => {
        const bookShelf = await postBookShelfService(userId, requestBody)
        setBookShelf(bookShelf)
    }

    const putBookShelf = async (userId, bookShelfId, requestBody) => {
        const bookShelf = await putBookShelfService(userId, bookShelfId, requestBody)
        // debugger;
        setBookShelf(bookShelf)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getBook()
        getRecommendations()
        getBookShelf(1,book.id)
    }, [loading])

    

    return (<div>
        <BookDetailTemplate
            bookDetailCard={
                <BookDetailCard {...book} bookShelf={bookShelf} postBookShelf={postBookShelf} putBookShelf={putBookShelf} />
            }
            alsoRead={<BookWidgetList booksList={booksList} />}
            aboutAuthor={<AboutAuthor {...{...book.author, booksList:booksList.slice(0, 3)}} />}
            followingReviews={followingReviewList}
            otherReviews={reviewsList}
            recommendations={<BookCardList booksList={recommendationsList.slice(6,10)} />}

        />
    </div>)
}