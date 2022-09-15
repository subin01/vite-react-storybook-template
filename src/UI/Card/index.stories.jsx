import { Card } from ".";
import card from "./scripts";
// import {Card, init} from './Card';
import Button from "@/UI/Button";

export default {
  title: "UI/Card",
  component: Card,
  // argTypes: {
  //   content: { control: 'text' },
  // },
};

const Template = args => (
  <Card
    {...args}
    footer={
      <>
        <Button label="save" />
        <Button label="cancel" secondary />
      </>
    }
  />
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
  children: "Card content section",
  header: "Card Header",
};

Primary.play = ({ canvasElement }) => {
  card.init();
};
