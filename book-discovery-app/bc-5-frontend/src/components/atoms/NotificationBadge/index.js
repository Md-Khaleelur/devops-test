import { Badge, IconButton } from '@material-ui/core'
import React from 'react'

export default function NotificationBadge(props) {
    return (
        <IconButton arial-label={props.label} onClick = {props.handleOnClick}>
            <Badge badgeContent={props.notificationCount > 0 ? props.notificationCount : null} color={'primary'}>
                {props.children}
            </Badge>
        </IconButton>
    )
}