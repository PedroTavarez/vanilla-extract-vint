import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RefereningDiv } from ".";

const Template: ComponentStory<typeof RefereningDiv> = (args) => (
  <RefereningDiv {...args} />
);

export default {
  title: "Lessons/1.1: Referencing",
  component: RefereningDiv,
} as ComponentMeta<typeof RefereningDiv>;

export const RefDiv = Template.bind({});
