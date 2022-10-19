import { InputHTMLAttributes } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useFormContext, useController } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  variant?: 'standard' | 'filled' | 'outlined'
  rules?: {
    required: boolean
  }
}

export const Input = ({
  label,
  variant = 'standard',
  name,
  type,
  rules = { required: true },
}: InputProps) => {
  const { control } = useFormContext()
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  return (
    <Box
      component="div"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        inputRef={ref}
        id="outlined-basic"
        label={label}
        variant={variant}
        type={type}
      />
    </Box>
  )
}
