import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Address } from './components/Address'
import { Confirmation } from './components/Confirmation'
import { Payment } from './components/Payment'
import {
  CheckoutContainer,
  FinishBuy,
  LeftSideContainer,
  ListProductSelected,
  RightSideContainer,
} from './styles'
import { useCheckout } from '../../hooks/useCheckout'

import { useNavigate } from 'react-router-dom'

const addressSchema = zod.object({
  cep: zod.string({ description: 'Campo CEP obrigatório' }),
  logradouro: zod.string({ description: 'Campo Logradouro obrigatório' }),
  numero: zod.string({ description: 'Campo Número obrigatório' }),
  cidade: zod.string({ description: 'Campo Cidade obrigatório' }),
  bairro: zod.string({ description: 'Campo Bairro obrigatório' }),
  uf: zod.string({ description: 'Campo UF obrigatório' }),
})

interface Form {
  bairro: string
  cep: string
  cidade: string
  logradouro: string
  numero: string
  uf: string
}

export function Checkout() {
  const {
    changeCompletedCheckout,
    checkoutProducts,
    selectedPayment,
    resetState,
  } = useCheckout()
  const checkoutForm = useForm({
    resolver: zodResolver(addressSchema),
  })

  const navigate = useNavigate()

  const { handleSubmit, watch } = checkoutForm

  const numero = watch('numero')
  const logradouro = watch('logradouro')
  const cidade = watch('cidade')
  const bairro = watch('bairro')
  const uf = watch('uf')
  const cep = watch('cep')

  const isValid =
    !!cep &&
    !!logradouro &&
    !!numero &&
    !!cidade &&
    !!bairro &&
    !!uf &&
    !!selectedPayment

  const disableButton = checkoutProducts.length === 0 || !isValid

  const onHandleSubmit: SubmitHandler<Form | FieldValues> = (data) => {
    changeCompletedCheckout({
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      logradouro: data.logradouro,
      numero: data.numero,
      uf: data.uf,
      paymentType: selectedPayment,
    })
    resetState()
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onHandleSubmit)}>
      <LeftSideContainer>
        <h1>Complete seu pedido</h1>
        <FormProvider {...checkoutForm}>
          <Address />
        </FormProvider>
        <Payment />
      </LeftSideContainer>
      <RightSideContainer>
        <h1>Cafés selecionados</h1>
        <ListProductSelected>
          <Confirmation />
          <FinishBuy disabled={disableButton} type="submit">
            confirmar pedido
          </FinishBuy>
        </ListProductSelected>
      </RightSideContainer>
    </CheckoutContainer>
  )
}
