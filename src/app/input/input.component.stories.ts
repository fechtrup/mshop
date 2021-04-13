import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
    title: 'Molecules/Input',
    component: InputComponent,
    argTypes: {
      backgroundColor: { control: 'color'},
      input: {control: 'boolean'},
    },
  } as Meta;

  const Template: Story<InputComponent> = (args) => ({
    component: InputComponent,
    props: args,
  });


  export const input = Template.bind({});
input.args = {
  input: true,
  backgroundColor: '#F2F2F2',
  label: 'Label',
};


export const error = Template.bind({});
error.args = { 
  backgroundColor: '#0E9A8F',
  label: 'Label',
  class: 'error',
};