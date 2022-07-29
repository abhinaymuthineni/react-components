// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";
import image from "../../../assets/explore.png";

export default {
  title: "molecules/portfolioCard",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const portfolioCard = Template.bind({});

portfolioCard.args = {
  image: image,
  cryptoItem: "Bitcoin",
  group: "BTC",
  price: "$34,000.00",
};
