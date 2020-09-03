import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MuiBookmarkIcon from "@material-ui/icons/Bookmark";
import MuiBookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: "0px",
    width: "24px",
    height: "24px",
    marginRight: "24px",
  },
  bookmarkEmpty: {
    fill: theme.palette.grey.icon500,
  },
}));

export default function BookMarkIcon(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "24px",
      height: "24px",
      // marginLeft: props.marginLeft | "0px",
      // marginRight: props.marginRight | "0px",
      padding: "0px",
    },
    bookmarkEmpty: {
      fill: theme.palette.grey.icon500,
    },
  }));
  const classes = useStyles();
  const [isSelected, setSelected] = useState(true);
  return (
    <IconButton className={classes.root}
      onClick={() => {
        setSelected(!isSelected);
      }}
    >
      {isSelected ? (
        <MuiBookmarkIcon color="primary" />
      ) : (
        <MuiBookmarkBorderIcon className={classes.bookmarkEmpty} />
      )}
    </IconButton>
  );
}
