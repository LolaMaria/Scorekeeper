import Input from "./Input.js";

export default {
  title: "components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  name: "Name of game",
  placeholder: "e.g. Carcassone",
};
