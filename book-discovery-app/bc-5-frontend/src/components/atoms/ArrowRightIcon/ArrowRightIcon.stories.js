import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import ArrowRight from './ArrowRightIcon'


export default {
    title : 'atoms/Arrow Right Icon',
    component: ArrowRight,
    decorators: [withKnobs]
}

export const ArrowIcon = () => {
    return (
        <ArrowRight />
    )
}