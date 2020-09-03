import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MuiPlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MuiPlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "24px",
    height: "24px",
    marginTop: "1px",
    padding: "0px"
  },

  playlist: {
    width: "24px",
    height: "24px",
    fill: theme.palette.grey.icon500
  },

  playlistCheck: {
    width: "24px",
    height: "24px",
  },
}))

export default function PlayListIcon(props) {
  const classes = useStyles();
  const [isSelected, setSelected] = useState(false)

  return (
    <IconButton className={classes.root} onClick={() => { setSelected(!isSelected) }}>
      {isSelected ?
        <MuiPlaylistAddIcon className={classes.playlist} />
        :
        <MuiPlaylistAddCheckIcon className={classes.playlistCheck} color="primary" />
      }
    </IconButton>
  );
}
