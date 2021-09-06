import { Card } from "./Card";

export default {
  title: "Form/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Card1 = Template.bind({});

Card1.args = {
  name: "Jatin Chourasia",
  profile: "Javascript",
  location: "Madhya Pradesh",
  contact: "45345345",
};
