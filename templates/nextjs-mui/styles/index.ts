import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#262E3D',
    },
    secondary: {
      main: red[500],
    },
  },
})
