import { StyledButton } from './styledButton'

export type ButtonProps = {
  label: string
  bgColor: string
  color: string
  size: 'small' | 'medium' | 'large'
  upperCase?: boolean
}
export const Button = ({
  label,
  bgColor,
  color,
  upperCase,
  size,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      size={size}
      upperCase={upperCase}
      {...props}
    >
      {label}
    </StyledButton>
  )
}
