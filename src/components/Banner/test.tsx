import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Jogue a nova temporada do <strong>CrashHands</strong>',
  buttonLabel: 'Compre agora',
  buttonLink: 'games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)
    // verificar se o tile existe renderizado
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    // verifique se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', {
        name: /Jogue a nova temporada do CrashHands/i
      })
    ).toBeInTheDocument()
    // verificar se a image existe renderizado
    expect(
      screen.getByRole('img', {
        name: /Defy death/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
