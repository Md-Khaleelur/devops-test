import { makeStyles, Typography } from '@material-ui/core'
import NavigateNext from '@material-ui/icons/KeyboardArrowRightSharp'
import React from 'react'
import BlockHeader from '../../components/molecules/BlockHeader'
import { subtitleColor } from '../../utils/colorPallete'
import { HomeScreenHeaders, SeeMoreText } from '../../utils/headers'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '1112px',
        // paddingRight: '11.3%',
        // paddingLeft: '11.3%',
        paddingTop: '30px',
        paddingBottom: '76px',
        margin: 'auto',
        '& $element': {
            marginTop: '30px'
        },

    },
    element: {
        marginTop: '30px'
    },
    seemore: {
        fontWeight: 'normal',
        color: theme.palette.primary.main
    },
    blockHeader: {
        marginBottom: '18px'
    },
    subtitle: {
        color: subtitleColor
    }
}))

export default function HomeScreenTemplate(props) {

    const classes = useStyles();

    return (
        <div id='container' className={classes.container}>
            <div id='banner'>
                {props.banner}
            </div>
            <div id='overviewList' className={classes.element}>
                {props.overviewList}
            </div>
            <div className={classes.element}>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={HomeScreenHeaders.booksReadingHeader}
                        headerVariant='h4'
                        linkText={SeeMoreText}
                    />
                </div>
                {props.booksReading}
            </div>
            <div className={classes.element}>
                <Typography variant='h4'>{HomeScreenHeaders.recommendationsHeader}</Typography>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={HomeScreenHeaders.searchHistorySubHeader}
                        headerVariant='subtitle2'
                        headerClass={classes.subtitle}
                        linkText={SeeMoreText}
                    />
                </div>
                {props.recommendedBooksList}
            </div>
            <div className={classes.element}>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={HomeScreenHeaders.peopleFollowingReadSubHeader}
                        headerVariant='subtitle2'
                        headerClass={classes.subtitle}
                        linkText={SeeMoreText}
                    />
                </div>
                {props.followersReadingList}
            </div>
            <div className={classes.element}>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={HomeScreenHeaders.topicsFollowingHeader}
                        headerVariant='h4'
                        linkText={SeeMoreText}
                    />
                </div>
                {props.topicsFollowingList}
            </div>
            <div className={classes.element}>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={HomeScreenHeaders.topRatingsHeader}
                        headerVariant='h4'
                        linkText={SeeMoreText}
                    />
                </div>
                {props.topRatingsList}
            </div>
        </div >
    )
}