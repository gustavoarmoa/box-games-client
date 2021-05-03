import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import React from 'react'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contato
        </Heading>
        <a href="mailto:sac@boxsales.com.br">sac@boxsales.com.br</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Siganos
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="recursos do rodapé">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Loja</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Escritórios
        </Heading>
        <span>Lorem ipsum dor</span>
        <span>Lorem ipsum dor</span>
        <span>Lorem ipsum dor</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Box Games 2021 | Todos os direitos reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer
