import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
// import bookicon from "../../../assets/student.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "255px",
    height: "120px",
    borderRadius: "4px",
    border: "solid 1px #dfe3eb",
    boxShadow: `0px 1px 2px 0px ${theme.palette.grey[300]}`
  },
  heading: {
    fontFamily : "Roboto",
    marginLeft: "13px",
    marginTop: "18px",
    color: "#6b6c6f",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    overflow:"hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  number: {
    marginLeft: "70px",
    marginTop: "8px",
    color: theme.palette.grey.A200,
    overflow:"hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  shape: {
    width: "40px",
    height: "40px",
    marginTop: "9px",
    marginLeft: "19px"
  },
  flexContainer : {
    display: "flex",
    flexDirection: "row"
  } 
}));

export default function CardShelf(props) {
  const classes = useStyles();
  console.log("props", props)
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.flexContainer}>
          <img className={classes.shape} src={props.image}></img>
          <Typography className={classes.heading}>{props.name}</Typography>
        </div>
        <Typography className={classes.number} variant="h2" >{props.number}</Typography>
      </div>
    </div>
  );
}
