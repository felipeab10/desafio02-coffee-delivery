import { ReactNode } from 'react'
import { ButtonContainer, Items } from './styles'

interface PaymentSelectedProps {
  children: ReactNode
  isActive?: boolean
  handleSelectPayment: () => void
}

export function PaymentSelect({
  children,
  isActive = false,
  handleSelectPayment,
}: PaymentSelectedProps) {
  return (
    <ButtonContainer
      type="button"
      isActive={isActive}
      onClick={handleSelectPayment}
    >
      <Items>{children}</Items>
    </ButtonContainer>
  )
}
