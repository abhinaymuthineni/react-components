import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

import image from "../../../assets/investment.png";

export default {
  title: "molecules/investment",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const investment = Template.bind({});

investment.args = { title: "Investment", price: "$34,000.00", image: image };
