import React from "react";
import { DesktopHeader } from "./DesktopHeader";
export default {
  title: "Organisms/DesktopHeader",
  component: DesktopHeader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DesktopHeader {...args} />;

// 👇 Each story then reuses that template
export const Desktop = Template.bind({});
Desktop.args = {
  // firstname:'martin',
  // lastname:'frei',
};
