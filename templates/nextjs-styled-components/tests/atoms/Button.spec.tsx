import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../../components/atoms/Button/button'

describe('Atom Button', () => {
  test('render Button without crash', () => {
    render(<Button label="test" bgColor="red" color="blue" size="medium" />)
  })

  test('render Button test', () => {
    render(<Button label="test" bgColor="red" color="blue" size="medium" />)
    const label = screen.getByText('test')
    expect(label).toBeInTheDocument()
  })
})
