import { Avatar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { iconFill, searchCardTitle } from '../../../utils/colorPallete'
import RatingBar from '../../molecules/RatingBar/RatingBar'

const useStyles = makeStyles(theme => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        width:'213px',
        height: '124px',
        padding:'12px',
        '& > *:not(:first-child)': {
            marginTop: '10px',
        }
    },
    profileDetails:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileNameDetails:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        '& > *:not(:first-child)': {
            marginLeft: '10px',
        },
    },
    rating:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }

}))

export default function FollowingCard(){
    const classes = useStyles();
    return(
        <div className = {classes.container}>
            <div className= {classes.profileDetails}>
                <div className={classes.profileNameDetails}>
                    <Avatar alt="Remy Sharp" src='https://gravatar.com/avatar/7567849d8b6f6dd94581cf409de1b129?s=400&d=robohash&r=x'/>
                    <Typography variant='body1' style={{color:searchCardTitle}}>Veronica</Typography>
                </div>
                <Typography variant='caption' style={{color:iconFill, fontWeight:'normal'}}>Student</Typography>
            </div>
            <div className={classes.rating}>
                <RatingBar value={4}/>
                {/* <Rating value={4.5} readOnly/> */}
                {/* <Typography variant='caption'>{parseFloat(4.5).toFixed(1)}</Typography> */}
            </div>
            <Typography variant='caption' style={{color:searchCardTitle,  fontWeight:'normal'}}>
            Peter was the 2016 recipient of the American Chemical Society's Grady Stack 
            </Typography>
        </div>
    )
}