import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CustomAvatar from '../CustomAvatar'


export default {
    title : 'atoms/Avatar',
    component: CustomAvatar,
    decorators: [withKnobs]
}

export const Avatar = () => {
    return (
        <CustomAvatar avatarUrl = {text('url', '')}/>
    )
}