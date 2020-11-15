import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" }
  ]
});

addDecorator(withKnobs);
addDecorator(withContexts(contexts));
