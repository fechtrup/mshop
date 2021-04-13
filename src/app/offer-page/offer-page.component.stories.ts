import { Story, Meta } from '@storybook/angular/types-6-0';
import { OfferPageComponent } from './offer-page.component';

export default {
    title: 'atoms/Offer Page',
    component: OfferPageComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story<OfferPageComponent> = (args: OfferPageComponent) => ({
    component: OfferPageComponent,
    props: args,
  });

  export const OfferPage = Template.bind({});
OfferPage.args = {
};