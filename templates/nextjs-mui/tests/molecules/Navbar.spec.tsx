import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ResponsiveAppBar } from '../../components/molecules/Navbar'

describe('Atom Navbar', () => {
  test('render Navbar without crash', () => {
    render(<ResponsiveAppBar />)
  })
})
