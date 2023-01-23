import { ShoppingCart } from 'phosphor-react'
import { CheckoutButtonContainer } from './styles'

interface CheckoutButtonProps {
  handleAddProductToCheckout: () => void
}

export function CheckoutButton({
  handleAddProductToCheckout,
}: CheckoutButtonProps) {
  return (
    <CheckoutButtonContainer type="button" onClick={handleAddProductToCheckout}>
      <ShoppingCart weight="fill" size={20} />
    </CheckoutButtonContainer>
  )
}
