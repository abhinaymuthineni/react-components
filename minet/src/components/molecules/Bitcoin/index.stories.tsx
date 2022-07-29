// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";
import explore from "../../../assets/explore.png";

export default {
  title: "molecules/bitcoin",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const bitcoin = Template.bind({});
bitcoin.args = { image: explore, title: "Bitcoin", price: "$3,406,069.54" };
