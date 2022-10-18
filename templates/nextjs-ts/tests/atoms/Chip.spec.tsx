import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Chip } from '../../components/atoms/Chip'

describe('Atom Chip', () => {
  test('render Chip without crash', () => {
    render(<Chip label="Chip" />)
  })

  test('render Chip label', () => {
    render(<Chip label="Chip" />)
    const label = screen.getByText('Chip')
    expect(label).toBeInTheDocument()
  })
})
