import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: "Button",
};

Secondary.args = {
  secondary: true,
  children: "Button",
};
