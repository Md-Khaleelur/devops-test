import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BookMarkIcon from "../../atoms/BookMarkIcon/BookMarkIcon";
import CustomAvatar from '../../atoms/CustomAvatar/index';
import PlayListIcon from "../../atoms/PlayListIcon/PlayListIcon";
import ReplyIcon from "../../atoms/ReplyIcon/ReplyIcon";
import RatingBar from '../../molecules/RatingBar/RatingBar';
import {iconFill} from '../../../utils/constants'
import theme from '../../../utils/theme'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 'inherit',
    height: "304px",
    borderRadius: "4px",
    border: 'solid 1px',
    borderColor: '#dfe3eb',
    fontFamily: 'Roboto',
    boxShadow: 'none',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'column',
    padding: "28px 11px 29px 24px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // paddingLeft: "24px"
    // paddingTop: "10px",
    // overflowWrap: false,
  },
  type1: {
    fontSize: "20px",
    color: "#3e3f42",
    paddingBottom: "13px",
    fontWeight: 500,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    '&: hover' :{
      overflow: "visible",
    }
  },
  type2: {
    fontSize: "14px",
    color: "#6b6c6f",
    paddingBottom: "13px",
    paddingRight: "25px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    '&: hover' :{
      overflow: "visible",
    }
  },


  avatar: {
    // paddingTop: "2px",
    marginTop: "2px",
  },
  by: {
    fontSize: "12px",
    color: '#9ea0a5',
  },
  author: {
    fontSize: "16px",
    marginTop: "3px",
    color: '#3e3f42',
  },
  rating: {
    marginTop: "15px",
    paddingBottom: "19px",
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: "12px",
  },
  value: {
    fontSize: "14px",
    fontWeight: 500,
    color: '#3e3f42',
  },
  total: {
    fontSize: "14px",
    color: '#3e3f42',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color: iconFill,
    marginTop: '16px',
    '& > *:not(:first-child)': {
        marginLeft: theme.spacing(6),
    },
  },
  icon: {
    padding: "0px",
    width: "24px",
    height: "24px",
    marginRight: "24px",
  },
  media: {
    marginTop: "26px",
    marginBottom: "28px",
    marginLeft: "21px",
  },
}));

export default function SearchGridCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.media} >
        <img src={props.coverImage} style={{ width: "180px", height: "250px", borderRadius: "4px" }} />
      </div>
      <CardContent className={classes.content}>
        <Typography className={classes.type1} >
          {props.title}
        </Typography>

        <Typography className={classes.type2}>
          {props.description}
        </Typography>

        <div className={classes.horizontal}>
          <CustomAvatar avatarUrl={props.avatarUrl} className={classes.avatar} />
          <div className={classes.vertical}>
            <Typography className={classes.by}>
              Author &nbsp;
            </Typography>
            <Typography className={classes.author}>
              {props.authorName}
            </Typography>
          </div>
        </div>

        <div className={classes.rating}>
          <RatingBar value={props.value} totalReviews={props.totalReviews} />
        </div>

        <div className={classes.footer}>
          <BookMarkIcon />
          <ReplyIcon />
          <PlayListIcon/>
        </div>
      </CardContent>
    </Card>
  );
}