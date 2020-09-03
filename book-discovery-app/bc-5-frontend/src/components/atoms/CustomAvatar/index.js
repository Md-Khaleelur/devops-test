import { IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // small: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  // },
  // large: {
  //   width: '38px',
  //   height: '38px',
  // },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.handleClick}>
    <IconButton>
      <Avatar alt="Remy Sharp" src={props.avatarUrl}/>
    </IconButton>
    </div>
  );
}