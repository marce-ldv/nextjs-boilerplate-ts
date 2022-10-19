import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/atoms/Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary',
  bgColor: '#0000ff',
  color: '#ffffff',
  size: 'large',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  bgColor: '#ff0000',
  color: '#ffffff',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  bgColor: '#ffe600',
  color: '#000000',
  size: 'large',
  label: 'large',
};

export const Small = Template.bind({});
Small.args = {
  bgColor: '#ffe600',
  color: '#000000',
  size: 'small',
  label: 'small',
};
