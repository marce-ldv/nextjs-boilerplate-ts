import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../../components/atoms/Button'

describe('Atom Button', () => {
  test('render Button without crash', () => {
    render(<Button>label</Button>)
  })

  test('render Button label', () => {
    render(<Button>label</Button>)
    const label = screen.getByText('label')
    expect(label).toBeInTheDocument()
  })
})
