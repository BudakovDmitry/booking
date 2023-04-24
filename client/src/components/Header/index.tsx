import * as Styled from 'src/components/Header/styles'

const Logo = require('src/images/logo.png')

type HeaderProps = {
  children: JSX.Element
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogoContainer>
        <Styled.HeaderLogo src={Logo} alt="logo" />
        <Styled.HeaderLogoText>Booking</Styled.HeaderLogoText>
      </Styled.HeaderLogoContainer>
      {children}
    </Styled.HeaderContainer>
  )
}

export default Header
