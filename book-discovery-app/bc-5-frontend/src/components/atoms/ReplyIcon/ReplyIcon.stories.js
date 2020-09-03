import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CustomReplyIcon from "./ReplyIcon";

export default {
  title: "atoms/ReplyIcon",
  component: ReplyIcon,
  decorators: [withKnobs],
};

export const ReplyIcon = () => {
  return <CustomReplyIcon />;
};
