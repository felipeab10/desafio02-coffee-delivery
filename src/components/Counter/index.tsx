import { Minus, Plus } from 'phosphor-react'
import { checkoutProductsType } from '../../contexts/CheckoutContext'

import { useCheckout } from '../../hooks/useCheckout'
import { AmountContainer, DecreaseItem, IncreaseItem } from './styles'

interface CounterProps {
  product: checkoutProductsType
}

export function Counter({ product }: CounterProps) {
  const { checkoutProducts, addProductToCheckout, decrementProductToCheckout } =
    useCheckout()
  const qtd = checkoutProducts.find((item) => item.id === product.id)?.QTD || 0

  const handleIncreaseQTDProduct = () => {
    addProductToCheckout(product)
  }

  const handleDecreaseQTDProduct = () => {
    decrementProductToCheckout(product)
  }

  return (
    <AmountContainer>
      <DecreaseItem onClick={handleDecreaseQTDProduct} type="button">
        <Minus />
      </DecreaseItem>
      <span>{qtd}</span>
      <IncreaseItem onClick={handleIncreaseQTDProduct} type="button">
        <Plus />
      </IncreaseItem>
    </AmountContainer>
  )
}
