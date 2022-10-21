import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '../../components/atoms/Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '/static/images/avatar/1.jpg',
  alt: 'Remy Sharp',
}
