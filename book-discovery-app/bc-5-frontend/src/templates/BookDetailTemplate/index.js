import { makeStyles } from '@material-ui/core';
import React from 'react';
import BlockHeader from '../../components/molecules/BlockHeader';
import { searchCardTitle } from '../../utils/colorPallete';
import { BookDetailScreenHeaders, ReadAllText, SeeMoreText } from '../../utils/headers';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '1112px',
        paddingTop: '30px',
        paddingBottom: '70px',
        margin: 'auto',
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bookDeatils: {
    },
    alsoread: {
        marginLeft: '30px',
        minWidth: '350px'
    },
    aboutAuthor: {
        marginTop: '30px',
    },
    blockHeader: {
        marginTop: '37px'
    },
    blockHeaderText: {
        color: searchCardTitle,
    },
    followingReviews: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '16px'
    },
    otherReviews: {
        marginTop: '16px',
        '& > *:not(:first-child)': {
            marginTop: '10px',
        },
    }
}))

export default function BookDetailTemplate(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.bookContainer}>
                <div className={classes.bookDeatils}>
                    {props.bookDetailCard}
                </div>
                <div className={classes.alsoread}>
                    {props.alsoRead}
                </div>
            </div>
            <div style={{ width: '729px' }}>
                <div className={classes.aboutAuthor}>
                    {props.aboutAuthor}
                </div>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={BookDetailScreenHeaders.reviewsofFollowing}
                        headerVariant='h4'
                        linkText={ReadAllText}
                        headerClass={classes.blockHeaderText}
                    />
                </div>
                <div className={classes.followingReviews}>
                    {props.followingReviews}
                </div>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={BookDetailScreenHeaders.otherReviews}
                        headerVariant='h4'
                        linkText={ReadAllText}
                        headerClass={classes.blockHeaderText}
                    />
                </div>
                <div className={classes.otherReviews}>
                    {props.otherReviews}
                </div>
            </div>
            <div className={classes.blockHeader}>
                <BlockHeader
                    headerText={BookDetailScreenHeaders.recommendationsOnSearch}
                    headerVariant='h4'
                    linkText={SeeMoreText}
                    headerClass={classes.blockHeaderText}
                />
            </div>
            <div>
                {props.recommendations}
            </div>
        </div>
    )
}