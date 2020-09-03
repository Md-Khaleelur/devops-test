import React from 'react'
import TopicsCard from './TopicsCard'
import {text, withKnobs} from '@storybook/addon-knobs'
import { makeStyles } from "@material-ui/core/styles";
import data from "../../../utils/StoryBookTestData/TopicCardData"
export default { title: 'molecules/Topic card', decorators: [withKnobs] };

const useStyles = makeStyles({
    flexContainer : {
      display: "flex",
    } 
  });

export const TopicCard = () => {
    return  (
        <TopicsCard
            image={text('Image', data[0].image)}
            subject={text('Subject', data[0].subject)}
        >
        </TopicsCard>
    )
}

export const TopicsToFollow = () => {
  const classes = useStyles()
  const items = data.map(item => (<TopicsCard image={item.image} subject={item.subject} />))
  return (
      <div className={classes.flexContainer}>
        {items}
      </div>
  )
}
