import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import graph from "../../../assets/graph.png";
import explore from "../../../assets/explore.png";

import Index from "./index";

export default {
  title: "molecules/assets",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const Assets = Template.bind({});

Assets.args = {
  cryptoImage: explore,
  cryptoItem: "Bitcoin",
  price: "$3,00,439.93",
  graph: graph,
};
