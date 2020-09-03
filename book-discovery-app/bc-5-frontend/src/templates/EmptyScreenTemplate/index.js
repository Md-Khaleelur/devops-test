import React from 'react'
import { makeStyles, Box, Typography, Link } from '@material-ui/core'
 
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        paddingTop: '60px',
        paddingBottom: '76px',
        // margin: 'auto',
        // '& $element': {
        //     marginTop: '30px'
        // },

    },
}))

export default function EmptyScreenTemplate(props) {

    const classes = useStyles();

    return (
        <div id='container' className={classes.container}>
            {props.emptyScreenComponents}
        </div >
    );
}