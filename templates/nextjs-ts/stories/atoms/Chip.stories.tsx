import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Chip } from '../../components/atoms/Chip'

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Chip',
  color: 'primary'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Chip',
  color: 'primary',
  disabled: true
}
