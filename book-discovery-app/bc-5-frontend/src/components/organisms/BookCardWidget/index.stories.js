import { ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BookWidgetCard from '.'
import theme from '../../../utils/theme'


export default {
    component: BookWidgetCard,
    title:'organism/BookWidgetCard'
}

storiesOf("organisms/BookWidgetCard", module)
.add("BookWidgetCard", () => <ThemeProvider theme={theme}><BookWidgetCard 
title='Inorganic Chemistry' 
authorName='J D Lee'
avgRating='4.0'
totalReviews='1204'
categoryName='Chemistry'
releaseDate='12 sep 1998'
language='English'/>
</ThemeProvider>)