import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import * as S from './styles'

// Criando novas funcionalidades para os buttons
// Ref. TypeScript React Cheat Sheet
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

// Extendemos o ButtonProps para receber as funcionalidades do ButtonTypes com (&)
export type ButtonProps = {
  // children?: React.ReactNode [já está incluso no Buttontypes]
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  // onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void [já está incluso no ButtonTypes]
} & ButtonTypes

// !! dupla negacão passamos se de fato existir
const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
