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

// font setting
import '../src/fontawesome/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// css setting
import { setup } from '@storybook/vue3';
import '../src/styles/common.scss';
import './storybook.scss';

setup((app) => {
  app.component('f-icon', FontAwesomeIcon)
})

export default preview;
