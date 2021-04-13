import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent } from './icon.component';

export default {
    title: 'atoms/Icon',
    component: IconComponent,
  } as Meta;

  const Template: Story<IconComponent> = (args: IconComponent) => ({
    component: IconComponent,
    props: args,
  });

  export const Icon = Template.bind({});
Icon.args = {
};

