import { Story, Meta } from '@storybook/angular/types-6-0';
import { LabelComponent } from './label.component';

export default {
    title: 'atoms/Label',
    component: LabelComponent,
  } as Meta;

  const Template: Story<LabelComponent> = (args: LabelComponent) => ({
    component: LabelComponent,
    props: args,
  });

  export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

  export const LabelError = Template.bind({});
LabelError.args = {
  label: 'Label Error',
  class: 'error',
};

export const LabelActive = Template.bind({});
LabelActive.args = {
  label: 'Label Active',
  class: 'active',
};
