import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SelectInput } from '../../components/atoms/Select'

export default {
  title: 'Atoms/Select',
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>

const MockedOptions = [
  { value: 'option1' },
  { value: 'option2' },
  { value: 40 },
]

const Template: ComponentStory<typeof SelectInput> = args => (
  <SelectInput
    options={MockedOptions}
    placeholder={args.placeholder}
    minWidth={args.minWidth}
  />
)

export const Small = Template.bind({})
Small.args = {
  minWidth: 120,
}

export const Medium = Template.bind({})
Medium.args = {
  minWidth: 150,
}
export const Large = Template.bind({})
Large.args = {
  minWidth: 200,
}
