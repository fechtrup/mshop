import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from './divider.component';

export default {
    title: 'atoms/Divider',
    component: DividerComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story<DividerComponent> = (args: DividerComponent) => ({
    component: DividerComponent,
    props: args,
  });

  export const Divider = Template.bind({});
Divider.args = {
};