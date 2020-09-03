import { Avatar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { appBarTextColor, currentlyReadBorder, searchCardTitle } from '../../../utils/colorPallete'
import { BookDetailScreenHeaders, SeeMoreText } from '../../../utils/headers'
import { getNumberWithCommas } from '../../../utils/utils'
import BlockHeader from '../../molecules/BlockHeader'
import PrimaryButton from '../../molecules/PrimaryButton'
import AuthorBookCard from '../../organisms/AuthorBookCard'


const useStyles = makeStyles(theme => ({
    container: {
        borderRadius: '4px',
        border: `solid 1px ${currentlyReadBorder}`,
    },
    aboutAuthor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: '12px',
        paddingBottom: '12px',
    },
    authorDetails: {
        marginLeft: '12px',
        width: 'fit-content',
        // '& > Typography:not(:first-child)': {
        //     marginTop: theme.spacing(1),
        // },
    },
    heading: {
        color: searchCardTitle,
        borderBottom: `solid 1px ${currentlyReadBorder}`,
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '18px'
    },
    authorPicture: {
        width: '80px',
        height: '80px',
        alignSelf: 'center'
    },
    followingButton: {
        width: '120px',
        height: '30px',
        marginTop: '8px',
        borderRadius: '4px',
        border: `solid 1px ${theme.palette.primary.main}`
    },
    authorDescription: {
        color: appBarTextColor,
        marginLeft: '16px'
    },
    blockHeader: {
        marginTop:'3px',
        marginBottom: '12px',
    },
    blockHeaderText: {
        fontWeight: '500',
        color: searchCardTitle
    },
    authorBooksList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authorbody: {
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingBottom:'18px'
    }
}))

export default function AboutAuthor(props) {


    const authorBooksList = props.booksList ? props.booksList.map((book) => (
        <AuthorBookCard {...book} />
    )) : null

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h6' className={classes.heading}>
                About Author
            </Typography>
            {/* <Divider variant='full'/> */}
            <div className={classes.authorbody}>
                <div className={classes.aboutAuthor}>
                    <Avatar className={classes.authorPicture} alt="Remy Sharp" src={props.img ? props.img : 'https://gravatar.com/avatar/7567849d8b6f6dd94581cf409de1b129?s=400&d=robohash&r=x'} />
                    <div className={classes.authorDetails}>
                        <Typography variant='h6' style={{ color: appBarTextColor, fontWeight: 'bold' }}>{props.name}</Typography>
                        <Typography variant='body2' style={{ color: searchCardTitle, marginTop: '4px' }}>{getNumberWithCommas(props.totalFollowers) + ' Followers'}</Typography>
                        <PrimaryButton variant='outlined' color='primary' className={classes.followingButton}>Following</PrimaryButton>
                    </div>
                    <Typography variant='body2' className={classes.authorDescription}>
                        Peter was the 2016 recipient of the American Chemical Society's Grady Stack Award for science journalism. Julio de Paula is Professor of Chemistry, Lewis & Clark College.
                </Typography>
                </div>
                <div className={classes.blockHeader}>
                    <BlockHeader
                        headerText={BookDetailScreenHeaders.bookbyHeader + ' ' + 'Joe pearson'}
                        headerVariant='body2'
                        linkText={SeeMoreText}
                        linkVariant='body2'
                        headerClass={classes.blockHeaderText}
                    />
                </div>
                <div className={classes.authorBooksList}>
                    {authorBooksList}
                </div>
            </div>
        </div>
    )
}