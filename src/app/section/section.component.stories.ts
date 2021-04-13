import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { SectionComponent } from './section.component';
import { HeadlineWithIconComponent } from '../headline-with-icon/headline-with-icon.component';
import { OfferPageComponent } from '../offer-page/offer-page.component';
import { PageComponent } from '../page/page.component';
import { DividerComponent } from '../divider/divider.component';
import { IconComponent } from '../icon/icon.component';
import { HeadlineComponent } from '../headline/headline.component';

export default {
    title: 'organism/Section',
    component: SectionComponent,
    decorators: [
      moduleMetadata({
        declarations: [HeadlineWithIconComponent, OfferPageComponent, PageComponent, DividerComponent, IconComponent, HeadlineComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;

const Template: Story<SectionComponent> = (args: SectionComponent) => ({
  component: SectionComponent,
});

export const Section = Template.bind({});

