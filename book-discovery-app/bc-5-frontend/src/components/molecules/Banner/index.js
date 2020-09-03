import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import BannerImage from '../../../static/assets/banner1.png'

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: 'auto'
      },
    button:{
        position: 'absolute',
        top: '68%',
        left: '3%',
        width: '100px',
        height: '38px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '14px',
        padding: '12px 24px',
        textTransform: 'capitalize',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        "&:hover":{
            backgroundColor: theme.palette.primary.main
        }
    }
    
}
))



export default function BannerButton() {
    const classes= useStyles()
    return (
        <div className={classes.container}>
            <img className={classes.img} src={BannerImage} alt="banner"/>
                <Button className={classes.button}>
                   <Typography variant = "body2" fontSize='inherit'>Discover</Typography>
                    </Button>
        </div>
        )
}