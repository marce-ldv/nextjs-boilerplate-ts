import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SelectInput } from '../../components/atoms/Select'
const MockedOptions = [
  { value: 'option1' },
  { value: 'option2' },
  { value: 40 },
]
describe('Atom Select', () => {
  test('render Button without crash', () => {
    render(
      <SelectInput placeholder="test" minWidth={150} options={MockedOptions} />
    )
  })
  test('render Select label', () => {
    render(
      <SelectInput
        placeholder="select an option"
        minWidth={150}
        options={MockedOptions}
      />
    )
    const label = screen.getByText('select an option')
    expect(label).toBeInTheDocument()
  })
})
