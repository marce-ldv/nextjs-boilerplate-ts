import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Drawer } from '../../components/molecules/Drawer'

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = ({ children }) => (
  <Drawer>{children}</Drawer>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur.',
}
