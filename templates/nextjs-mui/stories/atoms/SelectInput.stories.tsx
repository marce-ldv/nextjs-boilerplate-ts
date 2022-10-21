import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SelectInput } from '../../components/atoms/Select'

export default {
  title: 'Atoms/SelectInput',
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>

const Template: ComponentStory<typeof SelectInput> = () => <SelectInput />

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
