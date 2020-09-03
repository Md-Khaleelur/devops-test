import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import AboutAuthor from '.'
import data from '../../../utils/StoryBookTestData/authorBooksData'
import theme from '../../../utils/theme'


export default {
    component: AboutAuthor,
    title: 'organism/AboutAuthor'
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '729px',
        height: '320px'
    }
}))

const authorData ={
    name:'Joe Pearson',
    totalFollowers:1092,
    booksList: data
}



storiesOf("organisms/AboutAuthor", module)
    .add("AboutAuthor", () => {
        const classes = useStyles();
        return <ThemeProvider theme={theme} >
            <div className={classes.container}>
                <AboutAuthor {...authorData}/>
            </div>
        </ThemeProvider>
    })