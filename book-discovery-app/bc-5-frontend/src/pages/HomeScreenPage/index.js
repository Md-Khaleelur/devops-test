import React, { useEffect, useState } from 'react'
import { getAllBooks, getBooksReading } from '../.../../../service/BookManagementService'
import Banner from '../../components/molecules/Banner'
import BookCardList from '../../components/organisms/BookCardList'
import BooksReadingList from '../../components/organisms/BooksReadingList'
import EmptyScreenComponents from '../../components/organisms/EmptyScreen'
import OverviewList from '../../components/organisms/OverviewList'
import TopicsFollowingList from '../../components/organisms/TopicsFollowingList'
import EmptyScreenTemplate from '../../templates/EmptyScreenTemplate'
import HomeScreenTemplate from '../../templates/HomeScreenTemplate'
import { overviewImages, userReadStatus } from '../../utils/constants'


export default function HomeScreenPage(props) {


    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const [overViewStatus, setOverviewStatus] = useState([]);
    const flag = true;
    useEffect(() => {
        getBooks()
        getBooksReadingList()
    }, [props.userTarget])


    let BOOKSTATUS = {
        [userReadStatus.currentlyReading]: 0,
        [userReadStatus.toRead]: 0,
        [userReadStatus.booksRead]: 0,
        [userReadStatus.target]: props.userTarget
    }

    let IMAGESTATUS = [
        overviewImages.currentlyReading,
        overviewImages.toRead,
        overviewImages.booksRead,
        overviewImages.target]


    const getBooks = async () => {
        const books = await getAllBooks()
        setRecommendedBooks(books)
    }

    const getBooksReadingList = async () => {
        const userBooks = await getBooksReading()
        updateStatusCount(userBooks)
        const overViewStatsData = createOverviewData()
        console.log("overview", overViewStatus)
        setOverviewStatus(overViewStatsData)
    }

    const updateStatusCount = (readingBooks) => {

        readingBooks.map(book => {
            switch (book.readStatus) {
                case 'READING':
                    BOOKSTATUS[userReadStatus.currentlyReading] += 1
                    return
                case 'READ':
                    BOOKSTATUS[userReadStatus.booksRead] += 1
                    return
                case 'TO_READ':
                    BOOKSTATUS[userReadStatus.toRead] += 1
                    return
                default:
                    return
            }
        })
    }


    const createOverviewData = () => {
        let UserOverviewData = []
        let index = 0
        Object.entries(BOOKSTATUS).map(([statusName, count]) => {
            UserOverviewData.push({
                name: statusName,
                number: count,
                image: IMAGESTATUS[index]
            })
            index += 1
            return
        })
        return UserOverviewData
    }

    return (
        <div>
            {props.isNewUser
                ? <EmptyScreenTemplate emptyScreenComponents={<EmptyScreenComponents />} />
                : <HomeScreenTemplate
                    overviewList={<OverviewList overviews={overViewStatus} />}
                    banner={<Banner />}
                    booksReading={<BooksReadingList booksList={recommendedBooks.slice(0, 4)} />}
                    recommendedBooksList={<BookCardList booksList={recommendedBooks.slice(4, 8)} />}
                    followersReadingList={<BookCardList booksList={recommendedBooks.slice(8, 12)} />}
                    topicsFollowingList={<TopicsFollowingList />}
                    topRatingsList={<BookCardList booksList={recommendedBooks.slice(12, 16)} />}
                />
            }
        </div>
    )

}
