import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../../components/molecules/Header'

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => (
  <Header />
)

export const Default = Template.bind({})
Default.args = {}
