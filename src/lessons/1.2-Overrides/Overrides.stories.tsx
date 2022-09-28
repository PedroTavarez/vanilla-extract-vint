import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Overrides } from ".";

const Template: ComponentStory<typeof Overrides> = (args) => (
  <Overrides {...args} />
);

export default {
  title: "Lessons/1.2: Overrides",
  component: Overrides,
  argTypes: {
    flexDirection: {
      options: ["flexRow", "flexColumn"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Overrides>;

export const FlexDirectionOverride = Template.bind({});

FlexDirectionOverride.args = {
  flexDirection: "flexRow",
};
