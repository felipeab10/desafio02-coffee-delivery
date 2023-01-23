import { useFormContext } from 'react-hook-form'

import { MapPin } from 'phosphor-react'
import { ContentInfo } from '../../styles'
import {
  AddressContainer,
  AddressForm,
  AddressHeader,
  GridThreeColumn,
  GridTwoColumn,
  Input,
} from './styles'

export function Address() {
  const { register } = useFormContext()

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPin size={20} />
        <ContentInfo>
          <h1>Endereço de Entrega</h1>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </ContentInfo>
      </AddressHeader>
      <AddressForm>
        <Input {...register('cep')} placeholder="CEP" width="200px" />

        <Input {...register('logradouro')} placeholder="Rua" />
        <GridTwoColumn>
          <Input {...register('numero')} placeholder="Número" />
          <Input {...register('complemento')} placeholder="Complemento" />
        </GridTwoColumn>
        <GridThreeColumn>
          <Input {...register('bairro')} placeholder="Bairro" />
          <Input {...register('cidade')} placeholder="Cidade" />
          <Input {...register('uf')} placeholder="UF" />
        </GridThreeColumn>
      </AddressForm>
    </AddressContainer>
  )
}
