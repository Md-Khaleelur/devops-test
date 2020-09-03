import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from "react";
import { primayFill500 } from "../../../utils/colorPallete";



const useStyles = makeStyles({
    root : {
        width: "20px",
        height: "20px",
        padding: 0,
        color: primayFill500,
        marginLeft: "6px",
    },
})

export default function Icon(props){
    const classes = useStyles()

    return (
    <IconButton className={classes.root}>
        <ChevronRightIcon className={classes.root} />
    </IconButton>
    )
}