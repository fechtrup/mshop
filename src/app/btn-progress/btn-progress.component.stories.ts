import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnProgressComponent } from './btn-progress.component';

export default {
    title: 'atoms/Progress Button',
    component: BtnProgressComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story<BtnProgressComponent> = (args: BtnProgressComponent) => ({
    component: BtnProgressComponent,
    props: args,
  });

  export const ProgressButton = Template.bind({});
ProgressButton.args = {
};