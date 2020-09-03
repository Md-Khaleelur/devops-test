import { Link, makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import NavigateNext from '@material-ui/icons/KeyboardArrowRightSharp'
import React from 'react'

const useStyles = makeStyles(theme => ({
    seemore: {
        fontWeight: 'normal',
        color: theme.palette.primary.main,
        display:'flex',
        alignItems:'center'
    },
    icon:{
        width:'20px',
        height:'20px'
    }
}))

export default function BlockHeader(props) {
    const classes = useStyles();
    return (
        <Box id='booksReadingHeader' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Typography variant={props.headerVariant} className={props.headerClass}>{props.headerText}</Typography>
            <Link style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
                {/* <Box display='flex' flexDirection='row' justifyContent='flex-start'> */}
                {/* <div > */}
                    <Typography variant={props.linkVariant ? props.linkVariant : 'body1'} className={classes.seemore}>{props.linkText} {<NavigateNext/>}</Typography>
                    {/* <div className={classes.icon}>{<NavigateNext/>}</div> */}
                {/* </div> */}
                {/* </Box> */}
            </Link>
        </Box>
    )
}