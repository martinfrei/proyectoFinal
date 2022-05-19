import React from "react";
import {MobileHeader} from "./MobileHeader";
export default {
  title: "Organisms/MobileHeader",
  component: MobileHeader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MobileHeader {...args} />;

// 👇 Each story then reuses that template
export const Mobile = Template.bind({});
Mobile.args = {
  // firstname:'martin',
  // lastname:'frei',
};




