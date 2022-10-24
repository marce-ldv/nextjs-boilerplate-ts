import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumb } from '../../components/atoms/Breadcrumb'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = args => (
  <Breadcrumb {...args} />
)

const breadcrumbs = [
  <Link underline="always" key="1" color="inherit" href="/">
    Inicio
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/test">
    Productos
  </Link>,
  <Typography key="3" color="text.primary">
    Listado de productos
  </Typography>,
]

export const Default = Template.bind({})
Default.args = {
  options: breadcrumbs,
}
