// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";
import sold from "../../../assets/sold.png";

export default {
  title: "molecules/transactions",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const transaction = Template.bind({});

transaction.args = { image: sold, title: "Bitcoin" };
