import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { HeaderComponent } from './header.component';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';

export default {
    title: 'molecules/Header',
    component: HeaderComponent,
    decorators: [
      moduleMetadata({
        declarations: [LogoComponent, MenuComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
});

export const Header = Template.bind({});

