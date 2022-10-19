import MuiChip from '@mui/material/Chip'
import { ChipProps } from '@mui/material'
import Stack from '@mui/material/Stack'

interface Props extends ChipProps {
  label: string
}

export const Chip = ({ label, ...props }: Props) => {
  return (
    <Stack direction="row" spacing={1}>
      <MuiChip {...props} label={label} />
    </Stack>
  )
}
