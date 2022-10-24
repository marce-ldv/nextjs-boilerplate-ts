import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginOrganism } from '../../components/organisms/Login'

export default {
  title: 'Organisms/Login',
  component: LoginOrganism,
  argTypes: {},
} as ComponentMeta<typeof LoginOrganism>

const Template: ComponentStory<typeof LoginOrganism> = () => <LoginOrganism />

export const Default = Template.bind({})
Default.args = {}
