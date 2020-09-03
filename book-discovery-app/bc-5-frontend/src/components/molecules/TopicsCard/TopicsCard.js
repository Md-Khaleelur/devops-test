import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { appBarTextColor, overlay } from "../../../utils/colorPallete";


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    fontFamily: 'Roboto',
    marginRight:"30px"
  },
  title: {
    fontSize: "18px",
    width: "160px",
    marginTop: "10px",
    color: appBarTextColor,
  },
}));

export default function Topics(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Card elevation={1} style={{width: "160px", height: "108px", border: "solid 1px", borderColor: overlay}} >
        <img src={props.image} style={{width: "160px", height: "108px", }}/>
    </Card>
    <Typography align="center" variant='h6' className={classes.title}>{props.name}</Typography>
    </div>
  );
}

