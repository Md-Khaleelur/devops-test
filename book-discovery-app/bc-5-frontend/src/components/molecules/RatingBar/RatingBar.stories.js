import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CustomRatingBar from "./RatingBar";

export default {
  title: "molecules/RatingBar",
  component: RatingBar,
  decorators: [withKnobs],
};

export const RatingBar = () => {
  return (
    <CustomRatingBar
      value={2.5}
      totalReviews={text("TotalReviews", "1024 ratings")}
    />
  );
};
