import React, { ReactNode } from 'react'
import MuiButton from '@mui/material/Button'
import { ButtonProps as MUIButtonProps } from '@mui/material'

export interface ButtonProps extends MUIButtonProps {
  children: ReactNode
}

export const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <MuiButton color={color} size={size} {...props}>
      {children}
    </MuiButton>
  )
}
