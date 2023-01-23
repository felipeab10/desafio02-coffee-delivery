import {
  CheckoutButton,
  HeaderContainer,
  LocalidadeButton,
  OptionsContainer,
} from './styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCheckout } from '../../hooks/useCheckout'

export function Header() {
  const { totalProduct } = useCheckout()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <OptionsContainer>
        <LocalidadeButton>
          <MapPin weight="fill" size={20} />
          <span>Porto Alegre, RS</span>
        </LocalidadeButton>
        <CheckoutButton>
          <Link to="/checkout">
            <ShoppingCart weight="fill" size={20} />
          </Link>
          {totalProduct !== 0 && <span>{totalProduct}</span>}
        </CheckoutButton>
      </OptionsContainer>
    </HeaderContainer>
  )
}
