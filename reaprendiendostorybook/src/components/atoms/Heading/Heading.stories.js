import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Heading {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    title:'h1',
    type:'md',
    variant:'primary',
    children:'Sentite como en tu hogar'
};
export const Primary = Template.bind({});
Primary.args = {
  width: 100,
  height: "139",
  borderRadius: false,
  backgroundColor: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  width: 100,
  height: "139",
  borderRadius: false,
  backgroundColor: "secondary",
};
