import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import BookMarkIcon from "../../atoms/BookMarkIcon/BookMarkIcon";
import PlayListIcon from "../../atoms/PlayListIcon/PlayListIcon";
import ReplyIcon from "../../atoms/ReplyIcon/ReplyIcon";
import RatingBar from "../../molecules/RatingBar/RatingBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "255px",
    // height: "385px",
    borderRadius: "4px",
    border: "solid 1px #dfe3eb",
    boxShadow: `0px 2px 4px ${theme.palette.grey[300]}`,
    paddingBottom: '12px'
  },
  author: {
    width: "116px",
    height: "24px",
    color: theme.palette.grey.A200,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: '2px',
    fontWeight: 'normal',
    marginLeft: '8px'
  },
  by: {
    width: "42px",
    height: "22px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: "#6b6c6f",
    marginLeft: "32px",
    marginRight: "3px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  cover: {
    width: "180px",
    height: "190px",
    marginTop: "22px",
    marginRight: "37px",
    marginLeft: "37px"
  },
  title: {
    width: "216px",
    height: "28px",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.56",
    letterSpacing: "normal",
    color: theme.palette.grey.A200,
    marginTop: "12px",
    marginLeft: "32px",
    marginBottom: "6px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // '&:hover':{
    //   overflow:'visible'
    // }
  },
  star: {
    width: "15px",
    height: "14px",
    marginRight: "5px",
    marginTop: "3px",
  },
  bookmark: {
    marginLeft: "26px",
    marginRight: "27px"
  },
  actionButtons: {
    display: "flex",
    marginTop: "12px",
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(6),
    },
    marginLeft:'28px'
  }
}));

export default function BookCard(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.cover} src={props.coverImage}></img>
      <Link to={`/books/${props.id}`} style={{ textDecoration: 'none' }}>
        <div className={classes.title} >
          {props.title}
        </div>
      </Link>
      <div style={{ display: "flex", alignItems: 'baseline' }}>
        <div className={classes.by} >Author</div>
        <Typography className={classes.author} variant="body1">{props.author.name}</Typography>
      </div>
      <div>
        <div style={{ paddingLeft: '24px', paddingRight: '13px', paddingTop: '12px', paddingBottom: '12px' }}>
          <RatingBar
            value={props.avgRating}
            totalReviews={props.totalReviews + ' ratings'}
          />
        </div>
        <Divider></Divider>
        <div className={classes.actionButtons}>
          <BookMarkIcon />
          <ReplyIcon />
          <PlayListIcon />
        </div>
      </div>
    </div>
  );
}