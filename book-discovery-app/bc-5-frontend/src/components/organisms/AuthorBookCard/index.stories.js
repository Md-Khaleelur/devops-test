import { ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import AuthorBookCard from '.'
import theme from '../../../utils/theme'


export default {
    component: AuthorBookCard,
    title:'organism/AuthorBookCard'
}

storiesOf("organisms/AuthorBookCard", module)
.add("AuthorBookCard", () => <ThemeProvider theme={theme}><AuthorBookCard 
title='Inorganic Chemistry' 
authorName='Joe Pearson' s
avgRating='4.0'
totalReviews='1204'
categoryName='Chemistry'
releaseDate='12 sep 1998'
language='English'/>
</ThemeProvider>)