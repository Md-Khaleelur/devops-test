import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../../../utils/theme';
import BookCard from "./BookCard";
import data from "./BookCardData";
export default { title: 'organisms/Book Card', decorators: [withKnobs] };

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    justifyContent:'space-between',
    width:'1112px',
    margin:'auto'
  }
});



export const GenericBookCard = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <BookCard {...data[0]} />
      </ThemeProvider>
    </Router>
  )
}

export const Recommendations = () => {
  const classes = useStyles()
  const items = data.map(item => (<BookCard {...item} />))
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.flexContainer}>
          {items}
        </div>
      </Router>
    </ThemeProvider>
  )
}
