import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BookCover from '../../../assets/size-2.jpg';
import { appBarTextColor, currentlyReadBorder, iconFill } from '../../../utils/colorPallete';
import RatingBar from '../../molecules/RatingBar/RatingBar';


const useStyles = makeStyles(theme => ({
    container: {
        padding: '12px',
        display: 'flex',
        flexDirection: 'row',
        height: 'inherit',
        borderBottom: `solid 1px ${currentlyReadBorder}`
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'space-between',
        marginLeft: '12px'
    },
    image: {
        width: '90px',
        height: '104px'
    }
}))


export default function BookCardWidget(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={BookCover} className={classes.image} />
            <div className={classes.textContainer}>
                <Typography variant='body1' style={{fontWeight:'normal', color: appBarTextColor}}>
                    {props.title}
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px' }}>
                    <Typography variant='caption' style={{ color: iconFill, fontWeight:'normal' }}>
                        {"by"}
                    </Typography>
                    <Typography variant='caption' style={{ marginLeft: '8px', color: appBarTextColor, fontWeight:'normal'}}>
                        {props.authorName}
                    </Typography>
                </div>
                <RatingBar readOnly value={props.avgRating}  style={{height:'16px'}}/>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px' }}>
                    <Typography variant='caption' style={{ color: iconFill, fontWeight:'normal'}}>
                        {"Field:"}
                    </Typography>
                    <Typography variant='caption' style={{ marginLeft: '8px', color: appBarTextColor, fontWeight:'normal'}}>
                        {props.categoryName}
                    </Typography>
                </div>
            </div>
        </div>
    )
}