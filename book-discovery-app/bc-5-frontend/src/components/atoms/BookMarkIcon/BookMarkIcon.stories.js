import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CustomBookMarkIcon from "./BookMarkIcon";

export default {
  title: "atoms/BookMarkIcon",
  component: BookMarkIcon,
  decorators: [withKnobs],
};

export const BookMarkIcon = () => {
  return <CustomBookMarkIcon />;
};
