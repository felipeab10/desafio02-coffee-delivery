import { useCheckout } from '../../../../hooks/useCheckout'
import { Counter } from '../../../../components/Counter'
import { CheckoutButton } from './CheckoutButton'

import {
  Main,
  CoffeeContainer,
  CoffeeHeader,
  CoffeeTypeContainer,
  Footer,
} from './styles'
import { checkoutProductsType } from '../../../../contexts/CheckoutContext'

export function Coffees() {
  const { products, addProductToCheckout } = useCheckout()

  const handleAddProductToCheckout = (product: checkoutProductsType) => {
    addProductToCheckout(product)
  }

  return (
    <CoffeeContainer>
      {products.map((product) => {
        return (
          <Main key={product.id}>
            <CoffeeHeader>
              <img src={product.thumb} alt="" />
              <CoffeeTypeContainer>
                {product.type.map((type) => {
                  return <span key={type.id}>{type.label}</span>
                })}
              </CoffeeTypeContainer>
            </CoffeeHeader>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <Footer>
              <div>
                <span>R$</span>
                <strong>
                  {product.price.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </div>
              <Counter product={product} />
              <CheckoutButton
                handleAddProductToCheckout={() =>
                  handleAddProductToCheckout(product)
                }
              />
            </Footer>
          </Main>
        )
      })}
    </CoffeeContainer>
  )
}
