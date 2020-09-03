import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import reply from "../../../assets/reply.svg";


const useStyles = makeStyles({
    root : {
        width: "24px",
        height: "24px",
      },
      reply : {
        width: "24px",
        height: "24px",
      },
})

export default function ReplyIcon(props){
    const classes = useStyles()

    return (
    <IconButton className={classes.root}>
        <img className={classes.reply} src={reply}></img>
    </IconButton>
    )
}