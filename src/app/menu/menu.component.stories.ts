import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuComponent } from './menu.component';

export default {
    title: 'atoms/Menu',
    component: MenuComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

  const Template: Story<MenuComponent> = (args: MenuComponent) => ({
    component: MenuComponent,
    props: args,
  });

  export const Menu = Template.bind({});
Menu.args = {
};
