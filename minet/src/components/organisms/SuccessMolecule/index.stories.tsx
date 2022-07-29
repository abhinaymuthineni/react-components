// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

export default {
  title: "organisms/success",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const success = Template.bind({});

success.args = {
  text: "Sell is completed, please check your balance in your Rupee coin",
  button1: "SELL NOW",
  button2: "GO TO USD COIN",
};
