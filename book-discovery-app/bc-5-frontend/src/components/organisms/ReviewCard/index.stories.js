import React from 'react'
import { storiesOf } from '@storybook/react'
import ReviewCard from '.'
import {ThemeProvider, makeStyles} from '@material-ui/core/styles'
import theme from '../../../utils/theme'
 

export default {
    component: ReviewCard,
    title:'organism/ReviewCard'
}

const useStyles = makeStyles(theme => ({
    container : {
        width:'740px',
        height:'239px'
    }
}) )

storiesOf("organisms/ReviewCard", module)
.add("ReviewCad", () => {
const classes = useStyles()
return <ThemeProvider theme={theme}><div className={classes.container}><ReviewCard/> </div></ThemeProvider>})