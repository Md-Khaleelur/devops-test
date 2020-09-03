import { Link, makeStyles, Typography } from '@material-ui/core';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import { currentlyReadBorder, searchCardTitle } from '../../../utils/colorPallete';
import BookCardWidget from '../BookCardWidget';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `solid 1px ${currentlyReadBorder}`
    },
    heading: {
        padding: '14px',
        color: searchCardTitle,
        borderBottom: `solid 1px ${currentlyReadBorder}`
    },
    link:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:'14px',
        alignItems:'center'
    }
}))


export default function BookCardWidgetList(props) {

    const classes = useStyles();

    const listItems = props.booksList ? props.booksList.map((book) => (
        <BookCardWidget {...book} />
    )) : null

    if (listItems){
    return (
        <div className={classes.container}>
            <Typography variant='h6' className={classes.heading}>
                Your batchmates also read
            </Typography>
            {listItems}
            <Link className={classes.link}>
                <Typography variant='body2'>
                    See all
                </Typography>
                <NextIcon style={{width:'20px', alignSelf:'center', marginRight:'30px'}}/>
            </Link>
        </div>
    )
    }
    return null

}