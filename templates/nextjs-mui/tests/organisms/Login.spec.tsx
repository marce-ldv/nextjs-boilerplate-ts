import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { LoginOrganism } from '../../components/organisms/Login'

describe('Organism Login', () => {
  test('render LoginOrganism without crash', () => {
    render(<LoginOrganism />)
  })

  test('render username label in LoginOrganism', () => {
    render(<LoginOrganism />)
    const label = screen.getByText('username')
    expect(label).toBeInTheDocument()
  })
})
