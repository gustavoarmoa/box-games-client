import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // renderizar o GameCard
    renderWithTheme(<GameCard {...props} />)

    // verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verificar se a developer foi renderizado
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    // verificar se o img foi renderizada
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    // verificar se o price foi renderizado
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })
  it('should render price in label', () => {
    // renderizar o componente
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 235,00')

    // preço não tenha a linha cortada
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

    // preço tenha o backgorund secondário (verde)
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
    // preço não tenha cor cinza
  })

  it('should render a line throught in price when promotional', () => {
    // renderizar o componente (com price promotional) // 200 R$ // 15 R$
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    // preço tenha a line-through(200)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter o line through(15)
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a favorite icon when a favorite is true', () => {
    // renderizar o componente (com price promotional) // 200 R$ // 15 R$
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    // testando um methodo
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
