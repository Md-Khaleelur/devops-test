import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import SeeMore from './SeeMore'

export default {
    title : 'molecules/See More',
    component: SeeMore
}

export const SeeMoreRedirect = () => {
    return (
        <SeeMore />
    )
}