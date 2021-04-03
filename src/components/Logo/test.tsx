import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente (render do reactlibrary)
    // selecionar o elemento que queremos testar com o metdo (screem)
    // exception - assertion - asserção - comparação

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFa'
    })
  })
})
