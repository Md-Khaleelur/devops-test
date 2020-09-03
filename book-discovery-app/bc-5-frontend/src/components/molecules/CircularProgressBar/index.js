import { CircularProgress, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { progressBarEmptyColor, searchCardTitle } from '../../../utils/colorPallete';


const useStyles = makeStyles(theme => ({
    root: {
        color: progressBarEmptyColor,
    },
    circle: {

    },
    svg: {
        width: '60px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export default function CircularProgressBar({ value, ...rest }) {

    const classes = useStyles();

    const pseudoValue = value === 0 ? 100 : value
    const colorValue = value === 0 ? progressBarEmptyColor : 'primary'

    return (
        <div className={classes.container}>
            <CircularProgress
                classes={{
                    root: classes.root,
                    circle: classes.circle,
                    svg: classes.svg
                }}
                style={{
                    color: colorValue
                }}
                value={pseudoValue}
                {...rest} />
            <Typography variant='caption' style={{ fontWeight: 'normal', color: searchCardTitle, marginTop: '14px' }}>
                0 read / 539 pages
        </Typography>
        </div>
    )
}