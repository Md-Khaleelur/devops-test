import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrimaryBar from '../PrimaryAppBar'


export default {
    title: 'organisms/App Bar',
    component: PrimaryBar,
    decorators: [withKnobs]
}

export const PrimaryAppBar = () => {
    return <Router><PrimaryBar /></Router>
}