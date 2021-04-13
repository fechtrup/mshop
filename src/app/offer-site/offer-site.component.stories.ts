import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { OfferSiteComponent } from './offer-site.component';
import { HeaderComponent } from '../header/header.component';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { SectionComponent } from '../section/section.component';
import { HeadlineWithIconComponent } from '../headline-with-icon/headline-with-icon.component';
import { OfferPageComponent } from '../offer-page/offer-page.component';
import { PageComponent } from '../page/page.component';
import { DividerComponent } from '../divider/divider.component';
import { IconComponent } from '../icon/icon.component';
import { HeadlineComponent } from '../headline/headline.component';
import { BtnProgressComponent } from '../btn-progress/btn-progress.component';

export default {
    title: 'Template/Offer Site',
    component: OfferSiteComponent,
    decorators: [
      moduleMetadata({
        declarations: [HeaderComponent, LogoComponent, MenuComponent, SectionComponent, HeadlineWithIconComponent, OfferPageComponent, PageComponent, DividerComponent, IconComponent, HeadlineComponent, BtnProgressComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;

const Template: Story<OfferSiteComponent> = (args: OfferSiteComponent) => ({
  component: OfferSiteComponent,
});

export const OfferSite = Template.bind({});