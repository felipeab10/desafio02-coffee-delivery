import { CurrencyDollar } from 'phosphor-react'
import { useCheckout } from '../../../../hooks/useCheckout'
import { ContentInfo } from '../../styles'
import { PaymentSelect } from './components/PaymentSelect'
import { PaymentContainer, PaymentHeader, PaymentType } from './styles'

export function Payment() {
  const { paymentType, selectedPayment, changeSelectedPayment } = useCheckout()
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={20} />
        <ContentInfo>
          <h1>Pagamento</h1>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </ContentInfo>
      </PaymentHeader>
      <PaymentType>
        {paymentType.map((type) => (
          <PaymentSelect
            key={type.label}
            handleSelectPayment={() => changeSelectedPayment(type.label)}
            isActive={type.label === selectedPayment}
          >
            {type.icon}
            {type.label}
          </PaymentSelect>
        ))}
      </PaymentType>
    </PaymentContainer>
  )
}
