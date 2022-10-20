import styled from 'styled-components'

type ThemedButtonProps = {
  variant: 'primary' | 'secondary'
}
export const ThemedButton = styled.button<ThemedButtonProps>`
  margin: 8px;
  padding: 1rem 2rem;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  &:hover {
    filter: saturate(70%);
  }
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
          font-size: ${props.theme.palette.secondary.fontSize}
        `
      case 'primary':
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
          font-size: ${props.theme.palette.primary.fontSize}
        `
    }
  }}
`
