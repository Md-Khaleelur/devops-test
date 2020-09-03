import React from 'react'
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { primayFill500 } from "../../../utils/colorPallete";
import ArrowIcon from '../../atoms/ArrowRightIcon/ArrowRightIcon';

const useStyles = makeStyles({
    more: {
        display: "flex",
        width: "91px",
        height: "22px",
        fontSize: "14px",
        alignSelf: 'center',
        color: primayFill500,
    },
})

export default function SeeMore() {
    const classes = useStyles();

    return (
        <Typography className={classes.more}>
            See more
            <ArrowRight style={{ width: '20px', alignSelf: 'center' }} />
        </Typography>
    )
}