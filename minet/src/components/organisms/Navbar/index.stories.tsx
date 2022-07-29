// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./index";

export default {
  title: "organisms/header",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const header = Template.bind({});
