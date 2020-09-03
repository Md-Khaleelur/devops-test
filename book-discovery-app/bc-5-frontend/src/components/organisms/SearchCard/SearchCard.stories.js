import { makeStyles } from "@material-ui/core/styles";
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import data from "../../../utils/StoryBookTestData/SearchCardData";
import SearchCard from './SearchCard';
export default { title: 'organisms/Search card', decorators: [withKnobs] };

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    width:'400px',
    height:'420px'
  }
});

export const CurrentSearchCard = () => {
  return (
    <div style={{width:'398px', height:'90px'}}>
      <SearchCard
        bookName={text('Book name', data[0].bookName)}
        authorName={text('Author name', data[0].authorName)}
        category={text('Category', data[0].category)}
        coverImage={text('Image url', data[0].coverImage)}
      >
      </SearchCard>
    </div>
  )
}

export const SearchCardList = () => {
  const classes = useStyles()
  const items = data.map(item => (<SearchCard bookName={item.bookName} coverImage={item.coverImage} authorName={item.authorName} category={item.category} />))
  return (
    <div className={classes.flexContainer}>
      {items}
    </div>
  )
}
