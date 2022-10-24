import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ResponsiveAppBar } from '../../components/molecules/Navbar'

export default {
  title: 'Molecules/Navbar',
  component: ResponsiveAppBar,
} as ComponentMeta<typeof ResponsiveAppBar>

const Template: ComponentStory<typeof ResponsiveAppBar> = () => (
  <ResponsiveAppBar />
)

export const Default = Template.bind({})
Default.args = {}
