import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeadlineComponent } from './headline.component';
import { withKnobs, object} from '@storybook/addon-knobs';

export default {
    title: 'atoms/Headline',
    decorators: [withKnobs],
    component: HeadlineComponent,
    argTypes: {
        title: {
            control: {
              type: 'text',
            },
          },
    },
  } as Meta;

  const Template: Story<HeadlineComponent> = (args: HeadlineComponent) => ({
    component: HeadlineComponent,
    props: args,
  });

  export const headline = Template.bind({});
headline.args = {
};