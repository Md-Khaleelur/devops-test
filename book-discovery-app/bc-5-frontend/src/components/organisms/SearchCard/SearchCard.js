import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { appBarTextColor, currentlyReadBorder, currentReadField, searchCardTitle } from "../../../utils/colorPallete";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    borderRadius: "0px",
    border: 'solid 1px',
    borderColor: currentlyReadBorder,
    fontFamily: 'Roboto',
    boxShadow: 'none',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  hori: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: "12px",
    color: currentReadField,
  },
  content: {
    flexDirection: 'column',
    paddingTop: "10px",
    // overflowWrap: false,
  },
  by: {
    fontSize: "12px",
    marginTop: "8px",
    color: currentReadField,
  },
  author: {
    fontSize: "12px",
    marginTop: "8px",
    color: appBarTextColor,
  },
  type1: {
    fontSize: "14px",
    color: searchCardTitle,
  },
  type2: {
    fontSize: "12px",
    color: searchCardTitle,
    marginTop: "8px",
  },
  media: {
    marginTop: "9px",
    marginBottom: "9px",
    marginLeft: "55px", 
  },
}));

export default function SearchCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.media} >
        <img src={props.coverImage} style={{ width: "60px", height: "75px" }} />
      </div>
      <CardContent className={classes.content}>
        <Typography className={classes.type1}>
          {props.bookName}
        </Typography>
        <div className={classes.hori}>
          <Typography className={classes.by}>
            By &nbsp;
            </Typography>
          <Typography className={classes.author}>
            {props.authorName}
          </Typography>
        </div>
        <div className={classes.hori}>
          <Typography className={classes.by}>Field :</Typography>
          <Typography className={classes.type2}> &nbsp; {props.category}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}