// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

export default {
  title: "organisms/deposit",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const deposit = Template.bind({});
