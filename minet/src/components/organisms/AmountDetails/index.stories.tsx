// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

export default {
  title: "organisms/AmountDetails",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const AmountDetails = Template.bind({});

AmountDetails.args = {
  buttonval: "Sell max",
  value: "USD coin(cash)",
  price: "0.0234510 ",
  quantity: "$34,000.00",
};
