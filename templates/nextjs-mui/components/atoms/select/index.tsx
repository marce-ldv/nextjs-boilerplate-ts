import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

type SelectOption = {
  value: string | number
}

type SelectProps = {
  placeholder: string
  minWidth: number
  options: SelectOption[]
}

export const SelectInput = ({
  placeholder,
  minWidth,
  options,
}: SelectProps) => {
  const [option, setOption] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: minWidth }}>
      <InputLabel id="select-input">{placeholder}</InputLabel>
      <Select
        labelId="select-input"
        id="select-input"
        value={option}
        label="select"
        onChange={handleChange}
      >
        {options.map(({ value }) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
