import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Avatar } from '../../components/atoms/Avatar'

describe('Atom Avatar', () => {
  test('render Avatar without crash', () => {
    render(<Avatar src="/static/images/avatar/1.jpg" alt="avatar" />)
  })
})
