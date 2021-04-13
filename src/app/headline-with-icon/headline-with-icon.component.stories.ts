import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { HeadlineWithIconComponent } from './headline-with-icon.component';
import { IconComponent } from '../icon/icon.component';
import { HeadlineComponent } from '../headline/headline.component';

export default {
    title: 'molecules/Headline with Icon',
    component: HeadlineWithIconComponent,
    decorators: [
      moduleMetadata({
        declarations: [IconComponent, HeadlineComponent],
        imports: [CommonModule],
      }),
    ],
    argTypes: {
        title: {
            control: {
              type: 'text',
            },
          },
    },
  } as Meta;

const Template: Story<HeadlineWithIconComponent> = (args: HeadlineWithIconComponent) => ({
  component: HeadlineWithIconComponent,
});

export const HeadlineWithIcon = Template.bind({});
HeadlineWithIcon.args = {
};
