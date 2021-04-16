import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
    title: 'Atoms/Input',
    component: InputComponent,
    argTypes: {
      small: {control: 'boolean'},
    },
  } as Meta;

  const Template: Story<InputComponent> = (args) => ({
    component: InputComponent,
    props: args,
  });


  export const input = Template.bind({});
input.args = {
};


export const error = Template.bind({});
error.args = { 
  class: 'input-error',
};