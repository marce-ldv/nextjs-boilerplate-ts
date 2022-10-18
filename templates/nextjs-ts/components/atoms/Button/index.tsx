import React, { ReactNode } from 'react';
import MUIButton from '@mui/material/Button';
import { ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends MUIButtonProps {
  children: ReactNode;
}

export const Button = ({ children, color = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return (
    <MUIButton color={color} size={size} {...props}>
      { children }
    </MUIButton>
  )
}
