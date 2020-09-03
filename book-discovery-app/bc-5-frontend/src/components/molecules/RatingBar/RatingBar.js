import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { appBarTextColor } from '../../../utils/colorPallete';
import Rating from "../../atoms/Rating/Rating";


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  }
}))


export default function RatingBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Rating value={parseFloat(props.value)} readOnly />
      <Typography variant='caption' style={{ color: appBarTextColor, fontWeight: 'normal' }}>
        {parseFloat(props.value).toFixed(1)}
      </Typography>
      {
        props.totalReviews &&
          <Typography variant='caption' style={{ color: appBarTextColor, fontWeight:'normal'}}>
            ( {props.totalReviews} )
        </Typography>
      }
    </div>
  );
}
