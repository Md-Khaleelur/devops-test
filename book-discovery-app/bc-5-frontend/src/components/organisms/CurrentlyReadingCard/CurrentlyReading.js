import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { shadows } from '@material-ui/system';
import { currentReadField ,appBarTextColor, currentlyReadBorder} from "../../../utils/colorPallete";



const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    border: 'solid 1px',
    borderColor: currentlyReadBorder,
    fontFamily: 'Roboto',
    width:'255px',
    height:'138px'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  hori: {
    display: 'flex',
    flexDirection: 'row',
    height: 18,
  },
  content: {
    flex: '1 0 auto',
    // overflowWrap: false,
  },
  title: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: 500,
    fontSize: "14px",
  },
  by: {
    fontSize: 12,
    marginTop: 11,
    marginRight: 8,
    width: 14,
    height: 18,
    color: currentReadField,
  },
  author: {
    fontSize: 14,
    marginTop: 9,
    color: appBarTextColor,
    fontFamily: 'Roboto',
  },
  media: {
    width: 80,
    height: 105,
    marginTop: 16,
    marginBottom: 17,
    marginLeft: 10,
  },
}));

export default function CurrentlyReadingBook(props) {
  console.log("props", props)
  const classes = useStyles();

  return (
    <div>
    <Card elevation={1} className={classes.root}>
      <div className={classes.media} >
        <img src={props.coverImage} style={{ width: "80px", height: "105px" }} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Link to ={`/books/${props.id}`} style={{textDecoration:'none', color:'inherit'}}>
            <div style={{ fontWeight: 500, fontSize: "14px" }}>
              {props.title}
            </div>
          </Link>
          <div className={classes.hori}>
            <Typography className={classes.by}>
              by
            </Typography>
            <Typography className={classes.author}>
              {props.author.name}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "8px", fontSize: "12px", marginTop: "10px", color: currentReadField }}>
            <Typography style={{ display: "flex", flexDirection: "row", fontSize: "12px", marginTop: "10px", color: currentReadField }}>Category:</Typography>
            <Typography className={classes.author}> &nbsp; {props.category.name}</Typography>
          </div>
          <div style={{ display: "flex", fontSize: "12px", flexDirection: "row", marginBottom: "13px", color: "#6b6c6f" }}>
            {/* <Typography style={{ fontSize: "12px" }}>{props.currentPages ? (props.currentPages + " left / " + props.pages) : props.pages} pages</Typography> */}
            <Typography style={{ fontSize: "12px" }}>{Math.floor(Math.random()*(999-100+1)+100)} pages</Typography>
          </div>
        </CardContent>
      </div>
    </Card>
    </div>
  );
}