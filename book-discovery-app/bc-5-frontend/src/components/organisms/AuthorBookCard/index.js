import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BookCover from '../../../assets/chem-1.jpg';
import { appBarTextColor, iconFill, searchCardTitle } from '../../../utils/colorPallete';
import RatingBar from '../../molecules/RatingBar/RatingBar';


const useStyles = makeStyles(theme => ({
    container: {
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        height: 'inherit',
    },
    heading: {
        color: searchCardTitle,
        paddingLeft: '18px',
        paddingTop: '8px',
        paddingBottom: '12px'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'space-between',
        marginLeft: '12px'
    },
    image: {
        width: '60px',
        height: '75px'
    }
}))


export default function BookCardWidget(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={BookCover} className={classes.image} />
            <div className={classes.textContainer}>
                <Typography variant='body2' style={{ fontWeight: '500', color: appBarTextColor }}>
                    {props.title}
                </Typography>
                <RatingBar readOnly value={props.avgRating} style={{ height: '16px' }} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px' }}>
                    <Typography variant='caption' style={{ color: iconFill, fontWeight: 'normal' }}>
                        {"Field:"}
                    </Typography>
                    <Typography variant='caption' style={{ marginLeft: '8px', color: appBarTextColor, fontWeight: 'normal' }}>
                        {props.categoryName}
                    </Typography>
                </div>
            </div>
        </div>
    )
}