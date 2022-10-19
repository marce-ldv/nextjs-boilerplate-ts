import MUIInput from '@mui/material/Input'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { InputProps } from '@mui/material'
import { ChangeEvent, useRef } from 'react'

interface Props extends InputProps {
  label: string
}

export const Input = ({ label, variant = 'outlined', ...props }: Props) => {
  const textFieldRef = useRef(null)

  const onTextFieldChange = (event: ChangeEvent) => {}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...props}
        id="outlined-basic"
        label={label}
        variant={variant}
        ref={textFieldRef}
        onChange={onTextFieldChange}
      />
    </Box>
  )
}
