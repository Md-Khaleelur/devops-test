import React from 'react'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles((theme) => ({
    iconFilled: {
        // color: theme.palette.warning.main,
        color:'#facf55',
    },
}))(Rating);

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: "2px",
    },
    iconEmpty: {
        marginRight: "2px",
        fill: theme.palette.grey[300]
    },
    rating: {
        // marginLeft: "20px",
    }
}))

export default function SimpleRating({ chidren, ...rest }) {
    const classes = useStyles()
    return (
        <StyledRating
            m={"3px"}
            precision={0.5}
            size="small"
            // color="#facf55"
            color='red'
            className={classes.rating}
            emptyIcon={<StarBorderIcon fontSize="inherit" className={classes.iconEmpty} />}
            icon={<Star fontSize="inherit" className={classes.icon}></Star>}
            {...rest}
        // value={props.value}
        // className={classes.rating}
        // onChange={(event, newValue) => {
        //     props.setValue(newValue)
        // }}
        />
    )
}