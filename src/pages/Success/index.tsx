import { useCheckout } from '../../hooks/useCheckout'
import {
  DeliveryInfo,
  Descriptions,
  Info,
  MainInfo,
  SuccessContainer,
  Svg,
} from './styles'
import Delivering from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function Success() {
  const { completedCheckout } = useCheckout()
  const navigate = useNavigate()

  useEffect(() => {
    if (!completedCheckout.bairro) navigate('/')
  }, [completedCheckout, navigate])

  return (
    <SuccessContainer>
      <Descriptions>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <MainInfo>
          <DeliveryInfo>
            <Svg color="purple">
              <MapPin size={20} weight="fill" />
            </Svg>
            <Info>
              <div>
                <span> Entregar em</span>
                <strong>
                  {` ${completedCheckout.logradouro}, ${completedCheckout.numero}
                  `}
                </strong>
              </div>
              <span>
                {completedCheckout.bairro} - {completedCheckout.cidade},{' '}
                {completedCheckout.uf}
              </span>
            </Info>
          </DeliveryInfo>

          <DeliveryInfo>
            <Svg color="yellow">
              <Timer size={20} weight="fill" />
            </Svg>
            <Info>
              <div>
                <span> Previsão de entrega</span>
              </div>
              <strong>20 min - 30 min</strong>
            </Info>
          </DeliveryInfo>

          <DeliveryInfo>
            <Svg color="yellow-dark">
              <CurrencyDollar size={20} weight="fill" />
            </Svg>
            <Info>
              <div>
                <span> Pagamento na entrega</span>
              </div>
              <strong>{completedCheckout.paymentType}</strong>
            </Info>
          </DeliveryInfo>
        </MainInfo>
      </Descriptions>
      <img src={Delivering} alt="" />
    </SuccessContainer>
  )
}
