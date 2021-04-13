import { Story, Meta } from '@storybook/angular/types-6-0';
import { LogoComponent } from './logo.component';

export default {
    title: 'atoms/Logo',
    component: LogoComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story<LogoComponent> = (args: LogoComponent) => ({
    component: LogoComponent,
    props: args,
  });

  export const Logo = Template.bind({});
Logo.args = {
};

