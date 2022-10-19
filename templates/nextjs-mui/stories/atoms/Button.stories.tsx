import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../../components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Label</Button>
)

export const Default = Template.bind({})
Default.args = {}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
}
