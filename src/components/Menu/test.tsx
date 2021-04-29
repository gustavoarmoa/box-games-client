import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/abrir carinho/i)).toBeInTheDocument()
  })

  // selecionar o nosso MenuFull
  // const fullMenuElement = screen.getByRole('navigation', { hidden: true })
  // verificar se o menu está escondido
  // clicar no botão de abrir menu e verificar se ele abriu
  // clicar no botão de fechar menu e verificar se ele fechou

  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  // Validação de usuário logado - aula 164
  it('Deberia mostrar caixa de registro quando não estiver logado', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/lista de desejos/i)).not.toBeInTheDocument()
    expect(screen.getByText(/acessar agora/i)).toBeInTheDocument()
    expect(screen.getByText(/criar conta/i)).toBeInTheDocument()
  })

  it('Deberia mostrar lista de desejo e conta quando estiver logado', () => {
    renderWithTheme(<Menu username="guga" />)

    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/acessar agora/i)).not.toBeInTheDocument() // quando não temos certeza da busca usamos queryByText
    expect(screen.queryByText(/criar conta/i)).not.toBeInTheDocument()
  })
})
