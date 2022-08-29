import React from "react";
import Accordion from ".";
import accordion from "./scripts";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Accordion",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: false },
    children: { control: false },
  },
};

// More on component Templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <>
    <Accordion title="Banking and insurance">
      <p>
        Droughts have devastating effects on crop cultivation and livestock
        farming, while flooding and storms can damage infrastructure, crop
        lands, livestock shelter and farming equipment. Water-related disasters
        can also have a long-term impact on the productivity of agricultural
        land. Disruption to food production can impact imports and exports,
        which can affect global food security as well as impacting health and
        social equity within countries.
      </p>
    </Accordion>
    <Accordion title="Agriculture" isExpanded>
      <p>
        Agriculture is the world’s thirstiest industry – accounting for almost
        70% of global water withdrawals. Our Aquanomics model estimates that the
        sector could lose $416bn in economic output between 2022 and 2050.
      </p>
      <h6 className="h6">Water risk in the agricultural sector</h6>
      <p>
        Droughts have devastating effects on crop cultivation and livestock
        farming, while flooding and storms can damage infrastructure, crop
        lands, livestock shelter and farming equipment. Water-related disasters
        can also have a long-term impact on the productivity of agricultural
        land. Disruption to food production can impact imports and exports,
        which can affect global food security as well as impacting health and
        social equity within countries.
      </p>
    </Accordion>
    <Accordion title="Energy and utilities">
      <p>
        Droughts have devastating effects on crop cultivation and livestock
        farming, while flooding and storms can damage infrastructure, crop
        lands, livestock shelter and farming equipment. Water-related disasters
        can also have a long-term impact on the productivity of agricultural
        land. Disruption to food production can impact imports and exports,
        which can affect global food security as well as impacting health and
        social equity within countries.
      </p>
    </Accordion>
    <Accordion title="FMCG and retail">
      <p>
        Droughts have devastating effects on crop cultivation and livestock
        farming, while flooding and storms can damage infrastructure, crop
        lands, livestock shelter and farming equipment. Water-related disasters
        can also have a long-term impact on the productivity of agricultural
        land. Disruption to food production can impact imports and exports,
        which can affect global food security as well as impacting health and
        social equity within countries.
      </p>
    </Accordion>
  </>
);

export const Multiple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Multiple.args = {
  title: "Accordion title",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

Multiple.play = ({ canvasElement }) => {
  accordion.init();
};

Multiple.parameters = {
  controls: { hideNoControlsWarning: true },
};
