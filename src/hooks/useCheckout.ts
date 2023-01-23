import { useContext } from 'react'
import { CheckoutContext } from '../contexts/CheckoutContext'

export const useCheckout = () => useContext(CheckoutContext)
