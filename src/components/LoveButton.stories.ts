import { storiesOf } from '@storybook/vue';
import { VApp, VContent } from 'vuetify/lib';

import LoveButton from './LoveButton.vue';

// add the decorator
const appDecorator = () => {
  return {
    components: { VApp, VContent },
    template: `
      <v-app>
        <div style="background-color: rgb(134, 212, 226); padding: 20px; width: 100%; height: 100%;">
          <v-content>
            <story/>
          </v-content>
        </div>
      </v-app>
    `,
  };
};

storiesOf('LoveButton', module)
  .addDecorator(appDecorator)
  .add('default', () => ({
    components: { LoveButton },
    template: `<love-button love="vue"/>`,
  }));
