import styled from 'styled-components';

const StyledButton = styled.button<{
  bgColor: string;
  color: string;
  size: string;
}>`
  background-color: bgColor;
  color: color;
  padding-inline: ${props => (props.size === 'medium' ? '2rem' : '1rem')};
`;
export type ButtonProps = {
  label: string;
  bgColor: string;
  color: string;
  size: string;
};
export const Button = ({
  label,
  bgColor,
  color,
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton bgColor={bgColor} color={color} size={size} {...props}>
      {label}
    </StyledButton>
  );
};
