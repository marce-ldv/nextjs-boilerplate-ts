import styled from 'styled-components';

const sizes = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

export const StyledButton = styled.button<{
  bgColor: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  upperCase?: boolean;
}>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding-inline: ${props => sizes[props.size]};
  text-transform: ${props => (props.upperCase ? 'uppercase' : 'none')};
  padding-block: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    filter: saturate(70%);
  }
`;
