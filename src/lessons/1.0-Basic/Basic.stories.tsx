import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as ButtonComponent } from ".";

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export default {
  title: "Lessons/1.0: Basic API",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

export const Button = Template.bind({});

Button.args = {
  children: "Button",
  secondary: false,
};
