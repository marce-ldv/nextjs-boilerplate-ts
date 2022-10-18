import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '../../components/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => (
  <Input {...args} placeholder="Enter text" />
)

export const Default = Template.bind({})
Default.args = {
  label: 'TextField',
  variant: 'standard',
}

export const Filled = Template.bind({})
Filled.args = {
  label: 'TextField',
  variant: 'filled',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'TextField',
  variant: 'outlined',
}

export const DefaultDisabled = Template.bind({})
DefaultDisabled.args = {
  label: 'TextField',
  disabled: true,
  variant: 'standard',
}

export const FilledDisabled = Template.bind({})
FilledDisabled.args = {
  label: 'TextField',
  disabled: true,
  variant: 'filled',
}

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = {
  label: 'TextField',
  disabled: true,
  variant: 'outlined',
}
