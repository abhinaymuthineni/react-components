import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

export default {
  title: "organisms/view",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const view = Template.bind({});

view.args = {
  transaction: "You are buying",
  label11: "Paying through",
  label12: "Bitcoin Wallet",
  label21: "Delivery fees",
  label22: "0.001BTC",
  label31: "Deposit to",
  label32: "Rupee coin",
  button: "SELL NOW",
};
