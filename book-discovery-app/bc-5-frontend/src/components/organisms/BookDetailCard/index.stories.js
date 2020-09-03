import { ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BookDetailCard from '.'
import theme from '../../../utils/theme'


export default {
    component: BookDetailCard,
    title: 'organism/BookDetail'
}

storiesOf("organisms/BookDetailCard", module)
    .add("BookDetailCard",
        () => <ThemeProvider theme={theme}>
            <div style={{width:'729px', height:'593px'}}>
                <BookDetailCard
                    title='Inorganic Chemistry'
                    authorName='Joe Pearson'
                    avgRating='4.5'
                    totalReviews='1204'
                    coverImage='../../../assets/size-2.jpg'
                    categoryName='Chemistry'
                    releaseDate='12 sep 1998'
                    language='English' />
            </div>
        </ThemeProvider>)