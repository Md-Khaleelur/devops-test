import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core'
import DisLikeButton from '@material-ui/icons/ThumbDownOutlined'
import LikeButton from '@material-ui/icons/ThumbUpOutlined'
import React from 'react'
import { appBarTextColor, iconFill, searchCardTitle } from '../../../utils/colorPallete'
import { authorDescription } from '../../../utils/constants'
import PrimaryButton from '../../molecules/PrimaryButton'
import RatingBar from '../../molecules/RatingBar/RatingBar'
import SeeMoreLink from '../../molecules/SeeMore/SeeMore'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '12px'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        width: '60px',
        height: '60px'
    },
    headerInfoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        marginLeft: '12px',
        justifyContent: 'space-between',
        '& > *:not(:first-child)': {
            marginTop: '4px',
        }
    },
    headerTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '14px'
    },
    reviewBody: {
        marginLeft: '72px'
    },
    reviewText: {
        fontWeight: 'normal',
        marginTop: '12px',
        color: searchCardTitle
    },
    replyActionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '12px',
        alignItems: 'center',
        '& > *:not(:first-child)': {
            marginLeft: '24px',
        }
    },
    replyButton: {
        width: '91px',
        height: '32px',
        backgroundColor: '#f5f8fa',
        color: '#3e3f42',
        borderRadius: '4px',
        border: 'solid 1px #dfe3eb',
        boxShadow: `1px 1px 2px ${theme.palette.grey[300]}`
    },
    favButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '24px',
        height: '24px',
        color: iconFill,
        '& > *:not(:first-child)': {
            marginLeft: '24px',
        }
    }
}))


export default function ReviewCard(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerContainer}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src='https://gravatar.com/avatar/7567849d8b6f6dd94581cf409de1b129?s=400&d=robohash&r=x' />
                <div className={classes.headerInfoContainer}>
                    <div className={classes.headerTitleContainer}>
                        <Typography variant='h6' style={{fontWeight: 500, color: appBarTextColor}}>Sunny Quist</Typography>
                        <Typography variant='caption' style={{ color: iconFill }}>2 months ago</Typography>
                    </div>
                    <Typography variant='caption' style={{ color: iconFill }}>Professor at Harvard University</Typography>
                </div>
            </div>
            <div className={classes.reviewBody}>
                <div className={classes.rating}>
                    <RatingBar value={4}/>
                </div>
                <div>
                <Typography variant='body1' className={classes.reviewText}>
                     {`${authorDescription}`}
                </Typography>
                <SeeMoreLink/>
                </div>
                <div className={classes.replyActionsContainer}>
                    <PrimaryButton variant='outlined' className={classes.replyButton}>
                        <Typography variant='body2'>Reply</Typography>
                    </PrimaryButton>
                    <div className={classes.favButtons} >
                        <LikeButton />
                        <DisLikeButton />
                    </div>
                </div>
            </div>
            <Divider variant='inset' style={{marginTop:'18px'}}/>
        </div>
    )
}