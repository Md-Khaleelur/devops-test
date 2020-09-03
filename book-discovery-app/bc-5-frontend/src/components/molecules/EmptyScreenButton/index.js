import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        position: 'relative'
    },
    border: {
        width: '189px',
        height: '38px',
        borderRadius: '4px',
        border: 'solid 1px rgba(255, 255, 255, 0)',
    }, button: {
        width: '132px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        textAlign: 'center',
        textTransform: 'none',
        color: 'var(--white-fill-50)',
    },
}
));



export default function EmptyScreenButton() {
    const classes = useStyles()
    return (
        <Button variant="contained" color="primary" className={classes.border}>
            <Typography className={classes.button} >Start your Journey</Typography>
        </Button>
    )
}

