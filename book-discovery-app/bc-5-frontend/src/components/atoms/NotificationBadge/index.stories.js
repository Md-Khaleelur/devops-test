import NoticationIcon from '@material-ui/icons/Notifications'
import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import NotificationBadge from '../NotificationBadge'


export default {
    title:'atoms/NotificationBadge',
    component: NotificationBadge,
    decorators: [withKnobs]
}


export const Notification = () => {
    return <NotificationBadge notificationCount = {text('no of notifications', '0')}> {<NoticationIcon/>}</NotificationBadge>
}