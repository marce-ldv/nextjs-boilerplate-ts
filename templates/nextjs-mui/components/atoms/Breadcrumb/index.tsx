import { MouseEvent } from 'react'
import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface BreadcrumProps extends BreadcrumbsProps {}

function handleClick(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export const Breadcrumb = (props: BreadcrumProps) => {
  const breadcrumbs = [
    <Link
      underline="always"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Inicio
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Productos
    </Link>,
    <Typography key="3" color="text.primary">
      Listado de productos
    </Typography>,
  ]

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
