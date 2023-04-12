import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

import { setup } from '@storybook/vue3';
import { Button } from '../src/components/button/index';
import '../src/styles/common.scss';
import './storybook.scss';

setup((app) => {
  app.component(Button.name, Button);
})

export default preview;
