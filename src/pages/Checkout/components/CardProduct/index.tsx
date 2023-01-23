import { checkoutProductsType } from '../../../../contexts/CheckoutContext'
import { Counter } from '../../../../components/Counter'
import {
  ButtonRemoveProduct,
  CardProductAction,
  CardProductActions,
  CardProductContainer,
  CardProductMain,
  CardProductPrice,
  Divider,
} from './styles'
import { Trash } from 'phosphor-react'
import { useCheckout } from '../../../../hooks/useCheckout'

interface CardProductProps {
  product: checkoutProductsType
}

export function CardProduct({ product }: CardProductProps) {
  const { removeProductToCheckout } = useCheckout()
  const amountTotal = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.amountTotal)

  return (
    <CardProductContainer>
      <CardProductMain>
        <img src={product.thumb} alt="" />
        <CardProductActions>
          <h1>{product.title}</h1>
          <CardProductAction>
            <Counter product={product} />
            <ButtonRemoveProduct
              type="button"
              onClick={() => removeProductToCheckout(product.id)}
            >
              <Trash size={15} />
              Remover
            </ButtonRemoveProduct>
          </CardProductAction>
        </CardProductActions>
        <CardProductPrice>{amountTotal}</CardProductPrice>
      </CardProductMain>
      <Divider />
    </CardProductContainer>
  )
}
