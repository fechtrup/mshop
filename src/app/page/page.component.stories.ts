import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { PageComponent } from './page.component';
import { OfferPageComponent } from '../offer-page/offer-page.component';

export default {
    title: 'molecules/Page',
    component: PageComponent,
    decorators: [
      moduleMetadata({
        declarations: [OfferPageComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  component: PageComponent,
});

export const Page = Template.bind({});