import { MouseEvent } from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Breadcrumb } from '../../atoms/Breadcrumb'

export const Header = () => {
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

  return (
    <header>
      <div>
        <Breadcrumb options={breadcrumbs} />
      </div>
      <div>
        <div>productos</div>
        <div>
          <button>ver abonos</button>
          <button>nuevo plan</button>
        </div>
      </div>
    </header>
  )
}
