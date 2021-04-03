import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
