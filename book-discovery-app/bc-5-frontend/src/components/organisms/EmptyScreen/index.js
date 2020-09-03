import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import EmptyScreenImage from '../../../assets/bibliophile-amico.png'
import EmptyScreenButton from '../../../components/molecules/EmptyScreenButton'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, header: {
        width: '590px',
        height: '50px',
        fontFamily: 'Roboto',
        fontSize: '36px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.25px',
        color: '#3e3f42',
    }, body: {
        width: '590px',
        height: '78px',
        fontFamily: 'Roboto',
        fontSize: '22px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.55',
        letterSpacing: 'normal',
        color: '#6b6c6f',

    }, control: {
        padding: theme.spacing(8),
    }, imgControl: {
        width: '355px',
        height: '422px',
        objectFit: 'contain',
    },
}))

export default function EmptyScreenComponents() {
    const classes = useStyles()
    return (
        <div id='emptyScreencomponents' className={classes.container}>
            <Grid container
                alignItems="center"
                alignContent="center"
            >
                <Grid item style={{ marginLeft: "65px" }} >
                    <Typography variant='h1' className={classes.header} style={{ marginBottom: "17px" }}>Personalized Learning Journeys</Typography>
                    <Typography variant='body1' className={classes.body} style={{ marginBottom: "30px" }}>
                        Learning journeys mapped and recommended based on your grade, learning need and speed.
                    </Typography>
                    <EmptyScreenButton />
                </Grid>
                <Box mt={24}>
                    <Grid item style={{ marginLeft: "320px" }} >
                        <img src={EmptyScreenImage} alt="slow-network" className={classes.imgControl} />
                    </Grid>
                </Box>
            </Grid>
        </div>
    )

}