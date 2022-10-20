import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../../components/atoms/Button/button'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  bgColor: '#0000ff',
  color: '#ffffff',
  size: 'large',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error',
  bgColor: '#ff0000',
  color: '#ffffff',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  bgColor: '#ffe600',
  color: '#000000',
  size: 'large',
  label: 'large',
}

export const Small = Template.bind({})
Small.args = {
  bgColor: '#ffe600',
  color: '#000000',
  size: 'small',
  label: 'small',
}
