import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CustomPlayListIcon from "./PlayListIcon";

export default {
  title: "atoms/PlayListIcon",
  component: PlayListIcon,
  decorators: [withKnobs],
};

export const PlayListIcon = () => {
  return <CustomPlayListIcon />;
};
