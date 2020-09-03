import { ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BookWidgetList from '.'
import theme from '../../../utils/theme'


export default {
    component: BookWidgetList,
    title: 'organism/BookWidgetList'
}

const booksList = [
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
    {
        title: 'Inorganic Chemistry',
        authorName: 'Joe Pearson',
        avgRating: '4',
        totalReviews: '1204',
        categoryName: 'Chemistry',
        releaseDate: '12 sep 1998',
        language: 'English'
    },
]

storiesOf("organisms/BookWidgetList", module)
    .add("BookWidgetList",
        () => <ThemeProvider theme={theme}>
            <div style={{width:'350px', height:'628px'}}>
                <BookWidgetList booksList={booksList}/>
            </div>
        </ThemeProvider>)