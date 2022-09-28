import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DynamicContainer } from ".";

const Template: ComponentStory<typeof DynamicContainer> = (args) => (
  <DynamicContainer {...args} />
);

export default {
  title: "Lessons/1.3: Dynamic Styles",
  component: DynamicContainer,
  argTypes: {
    backgroundColor: {
      options: [
        "GRAY_500",
        "RED_500",
        "BLUE_500",
        "YELLOW_500",
        "BLUSH_500",
        "GREEN_500",
        "BLACK",
        "WHITE",
        "TRANSPARENT",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof DynamicContainer>;

export const DynamicStyles = Template.bind({});

DynamicStyles.args = {
  backgroundColor: "BLACK",
};
