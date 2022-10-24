import { ReactNode } from 'react'
import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface BreadcrumProps extends BreadcrumbsProps {
  options: ReactNode[]
}

export const Breadcrumb = ({ options }: BreadcrumProps) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {options}
      </Breadcrumbs>
    </Stack>
  )
}
