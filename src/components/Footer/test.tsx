import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    // *** Verificar se tem as columnas ***
    // Contato
    // Siganos
    // Links
    // Escritórios
    // const { container } = render(<Footer />)

    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /siganos/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /escritórios/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
