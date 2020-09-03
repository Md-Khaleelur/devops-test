import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import theme from '../../../utils/theme';
import data from "../OverviewList/ShelfCardData";
import ShelfCard from "./ShelfCard";
export default { title: 'organisms/Shelf Card', decorators: [withKnobs] };

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: 'row',
    width:'1112px',
    margin:'auto',
    justifyContent:'space-between'
  },
});

export const GenericShelfCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShelfCard
        name={text("Name", "CURRENTLY READING")}
        number={number("Number", 6)}
        image = '../../../assets/reading-24-px.svg'
      ></ShelfCard>
    </ThemeProvider>
  );
};

export const BookShelf = () => {
  const classes = useStyles();
  const items = data.map((item) => (
    <ShelfCard {...item} />
  ));
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.flexContainer}>{items}</div>
    </ThemeProvider>
  );
};
