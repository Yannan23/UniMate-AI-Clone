import { render, screen } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import RootLayout from './layout'

describe('RootLayout', () => {
  test('renders children content', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
