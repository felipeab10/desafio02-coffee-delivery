import axios from 'axios'
import { Bank, CreditCard, Money } from 'phosphor-react'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { ListProducts, ListProductsAttributes } from '../services/coffees'

export interface checkoutProductsType {
  id: number
  title: string
  QTD: number
  thumb: string
  price: number
  amountTotal: number
}

interface CompletedCheckout {
  cep: string
  logradouro: string
  bairro: string
  cidade: string
  uf: string
  numero: string
  paymentType: string
}

interface PaymentType {
  label: string
  value: string
  icon: any
}

interface CheckoutContextType {
  products: ListProductsAttributes[]
  checkoutProducts: checkoutProductsType[]
  totalProductPrice: number
  totalProduct: number
  selectedPayment: string
  completedCheckout: CompletedCheckout
  paymentType: PaymentType[]
  addProductToCheckout: (product: checkoutProductsType) => void
  decrementProductToCheckout: (product: checkoutProductsType) => void
  removeProductToCheckout: (productId: number) => void
  changeSelectedPayment: (value: string) => void
  changeCompletedCheckout: (value: CompletedCheckout) => void
  resetState: () => void
}

interface CheckoutProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextType)

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [products, setProducts] =
    useState<ListProductsAttributes[]>(ListProducts)
  const [checkoutProducts, setCheckoutProducts] = useState<
    checkoutProductsType[]
  >([])

  const [completedCheckout, setCompletedCheckout] = useState(
    {} as CompletedCheckout,
  )

  const changeCompletedCheckout = (value: CompletedCheckout) =>
    setCompletedCheckout(value)

  const [selectedPayment, setSelectedPayment] = useState('')
  const changeSelectedPayment = (value: string) => setSelectedPayment(value)

  const paymentType: PaymentType[] = [
    {
      label: 'cartão de crédito',
      value: 'CARTAO_CREDITO',
      icon: <CreditCard size={18} />,
    },
    {
      label: 'cartão de débito',
      value: 'CARTAO_DEBITO',
      icon: <Bank size={18} />,
    },
    { label: 'dinheiro', value: 'DINHEIRO', icon: <Money size={18} /> },
  ]

  const addProductToCheckout = (product: checkoutProductsType) => {
    const productExist = checkoutProducts.find((item) => item.id === product.id)

    if (!productExist?.id) {
      setCheckoutProducts([
        ...checkoutProducts,
        {
          ...product,
          QTD: product.QTD + 1,
          amountTotal: (product.QTD + 1) * product.price,
        },
      ])
      return
    }

    setCheckoutProducts((state) =>
      state.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            QTD: item.QTD + 1,
            amountTotal: (item.QTD + 1) * item.price,
          }
        }

        return item
      }),
    )
  }

  const decrementProductToCheckout = (product: checkoutProductsType) => {
    const productExist = checkoutProducts.find((item) => item.id === product.id)

    if (productExist?.QTD === 0) return

    setCheckoutProducts((state) =>
      state.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            QTD: item.QTD - 1,
            amountTotal: (item.QTD - 1) * item.price,
          }
        }

        return item
      }),
    )
  }

  const removeProductToCheckout = (productId: number) => {
    const removeProduct = checkoutProducts.filter(
      (item) => item.id !== productId,
    )
    setCheckoutProducts(removeProduct)
  }

  const verifyProductInCheckoutZero = useCallback(() => {
    if (checkoutProducts.length === 0) {
      return
    }

    const noProductZero = checkoutProducts.filter(
      (product) => product.QTD !== 0,
    )

    if (noProductZero.length !== checkoutProducts.length) {
      setCheckoutProducts(noProductZero)
    }
  }, [checkoutProducts])

  const totalProductPrice = checkoutProducts.reduce(
    (accumulator, product) => accumulator + product.QTD * product.price,
    0,
  )

  const totalProduct = checkoutProducts.reduce(
    (accumulator, product) => accumulator + product.QTD,
    0,
  )

  const resetState = () => {
    setCheckoutProducts([])
  }

  useEffect(() => {
    verifyProductInCheckoutZero()
  }, [verifyProductInCheckoutZero])

  return (
    <CheckoutContext.Provider
      value={{
        products,
        checkoutProducts,
        totalProductPrice,
        totalProduct,
        completedCheckout,
        paymentType,
        selectedPayment,
        addProductToCheckout,
        removeProductToCheckout,
        decrementProductToCheckout,
        changeSelectedPayment,
        changeCompletedCheckout,
        resetState,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
