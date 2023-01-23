import { useCheckout } from '../../../../hooks/useCheckout'
import { CardProduct } from '../CardProduct'
import {
  ConfirmationContainer,
  ProductList,
  Tittle,
  CheckoutInfo,
  Items,
} from './styles'

export function Confirmation() {
  const { totalProductPrice, checkoutProducts } = useCheckout()

  const formatedTotalPriceProducts = totalProductPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const formatedTotalPriceProductsWithZip = (
    totalProductPrice + 3.5
  ).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <ConfirmationContainer>
      <ProductList>
        {checkoutProducts.map((product) => {
          return <CardProduct key={product.id} product={product} />
        })}
        {checkoutProducts.length ? (
          <CheckoutInfo>
            <Items>
              <span>Total de itens</span>
              <span>{formatedTotalPriceProducts}</span>
            </Items>
            <Items>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Items>
            <Items>
              <span>Total</span>
              <span>{formatedTotalPriceProductsWithZip}</span>
            </Items>
          </CheckoutInfo>
        ) : (
          <h1>Nenhum produto selecionado</h1>
        )}
      </ProductList>
    </ConfirmationContainer>
  )
}
