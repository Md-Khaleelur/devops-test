import { ThemeProvider } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import React from 'react'
import FollowingCard from '.'
import theme from '../../../utils/theme'


export default {
    component: FollowingCard,
    title: 'organism/FollowingCard'
}

storiesOf("organisms/FollowingCard", module)
    .add("FollowingCard", () => <ThemeProvider theme={theme}><FollowingCard /></ThemeProvider>)