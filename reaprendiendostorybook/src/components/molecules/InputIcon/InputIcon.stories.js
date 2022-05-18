import React from "react";
import { InputIcon } from "./InputIcon";

export default {
  title: "Molecules/InputIcon",
  component: InputIcon,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InputIcon {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  input:{
    size:'base',
    placeholder:'This is a Label with an Icon',
    variant:'base'
  },
  icon:{
    icon:'location',
    size:'xs'
  }
};

