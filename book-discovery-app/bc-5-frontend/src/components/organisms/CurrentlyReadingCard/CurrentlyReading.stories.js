import { makeStyles } from "@material-ui/core/styles";
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import data from "../../../utils/StoryBookTestData/CurrentlyReadingData";
import CurrentlyReading from './CurrentlyReading';
export default { title: 'organisms/Currently Reading', decorators: [withKnobs] };

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '1112px'
  }
});

export const CurrentBook = () => {
  return <Router>
    <CurrentlyReading {...data[0]} />
  </Router>
};


const items = data.map(item => (<CurrentlyReading {...item} />))
export const CurrentShelf = () => {
  return (
  <Router>
    <div className={classes.flexContainer}>
      {items}
    </div>
  </Router>
)
}