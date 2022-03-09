import ButtonCreate from "./ButtonCreate.js";

export default {
  title: "components/ButtonCreate",
  component: ButtonCreate,
  argTypes: {},
};

const Template = (args) => <ButtonCreate {...args} />;

export const Default = Template.bind({});
Default.args = {};
