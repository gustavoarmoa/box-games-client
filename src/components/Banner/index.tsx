import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'

import * as S from './styles'

// Criando types baseados na API
export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />

    {/* box contaneir - Quandrado  */}
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      {/* Importamos um button  */}
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
