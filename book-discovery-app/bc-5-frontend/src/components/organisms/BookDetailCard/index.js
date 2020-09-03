import { makeStyles, Typography } from '@material-ui/core'
import MuiFormatListIcon from '@material-ui/icons/FormatListBulletedOutlined'
import LanguageIcon from '@material-ui/icons/LanguageOutlined'
import NewReleaseIcon from '@material-ui/icons/NewReleasesOutlined'
import React from 'react'
import DropDownButton from '../../../components/molecules/DropDownButton'
import { appBarTextColor, iconFill, searchCardTitle } from '../../../utils/colorPallete'
import { getNumberWithCommas } from '../../../utils/utils'
import CircularProgresBar from '../../molecules/CircularProgressBar'
import PrimaryButton from '../../molecules/PrimaryButton'
import RatingBar from '../../molecules/RatingBar/RatingBar'
import BookMarkIcon from "../../atoms/BookMarkIcon/BookMarkIcon";
import PlayListIcon from "../../atoms/PlayListIcon/PlayListIcon";
import ReplyIcon from "../../atoms/ReplyIcon/ReplyIcon";


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1em',
        justifyContent: 'space-evenly',
    },
    circularProgress: {
        alignSelf: 'flex-start',
        marginLeft: '8px',
        marginRight: '30px'
    },
    descriptionContainer: {
        marginTop: '30px',
        '& > *:not(:first-child)': {
            marginTop: theme.spacing(2),
        },
    },
    dropDownContainer: {
        display: 'flex',
        flexDirection: 'row',

        marginTop: '14px'
    },
    button: {
        width: '151px',
        height: '32px',
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        color: iconFill,
        marginTop: '16px',
        '& > *:not(:first-child)': {
            marginLeft: theme.spacing(6),
        },
    },
    imageContainer: {
        width: '180px'
    }
}))

export default function BookDetailCard(props) {

    const classes = useStyles();
    console.log("bookShelf props", props)
    // console.log("readStatus", props.bookShelf.readStatus)
    return (
        <div className={classes.container} >
            <div className={classes.detailsContainer}>
                <div className={classes.bookContainer}>
                    <img className={classes.imageContainer} src={props.coverImage} />
                    <div className={classes.detailsTextContainer}>
                        <Typography variant='h4' style={{ color: appBarTextColor }}>
                            {props.title}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '8px' }}>
                            <Typography variant='body2' style={{ color: iconFill }}>
                                {"by"}
                            </Typography>
                            <Typography variant='h6' style={{ marginLeft: '8px', color: appBarTextColor }}>
                                {props.author ? props.author.name : 'author'}
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant='body2' style={{ color: iconFill }}>
                                {"Field:"}
                            </Typography>
                            <Typography variant='h6' style={{ marginLeft: '8px', color: appBarTextColor }}>
                                {props.category ? props.category.name : 'category'}
                            </Typography>
                        </div>
                        <div style={{ marginTop: '12px' }}>
                            <RatingBar value={props.avgRating} totalReviews={getNumberWithCommas(props.totalReviews) + ' ratings'} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: searchCardTitle, marginTop: '16px' }}>
                            <NewReleaseIcon style={{ width: '15px', height: '15px', alignSelf: 'center' }} />
                            <Typography variant='body2' style={{ marginLeft: '4px' }}>
                                Release Date : {props.releaseDate}
                            </Typography>
                            <LanguageIcon style={{ width: '15px', height: '15px', alignSelf: 'center', marginLeft: '16px' }} />
                            <Typography variant='body2' style={{ marginLeft: '4px' }}>
                                {props.language}
                            </Typography>
                        </div>
                        <div className={classes.actionButtons}>
                            <BookMarkIcon />
                            <MuiFormatListIcon />
                            <PlayListIcon />
                            <ReplyIcon />
                        </div>
                        <div className={classes.dropDownContainer}>
                            <PrimaryButton className={classes.button} variant='contained' color='primary'>
                                {props.bookShelf && props.bookShelf.readStatus == "READING" ? "Continue Reading" : "Start Reading"}
                        </PrimaryButton>
                            <DropDownButton bookId={props.id} bookShelf={props.bookShelf} postBookShelf={props.postBookShelf} putBookShelf={props.putBookShelf}/>
                        </div>
                    </div>
                </div>
                <CircularProgresBar className={classes.circularProgress} variant='static' value={100} thickness={6} size={60} />
            </div>
            <div className={classes.descriptionContainer}>
                <Typography variant='subtitle1' style={{ color: appBarTextColor }}>Book Description</Typography>
                <Typography variant='h6' style={{ color: searchCardTitle }}>Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.
By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each </Typography>
            </div>
        </div>
    )
}