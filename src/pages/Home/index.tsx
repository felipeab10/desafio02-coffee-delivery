import {
  Background,
  CoffeeTitle,
  DescriptionContainer,
  DescriptionFeatureContainer,
  FeatureContainer,
  FeatureItems,
  HeroContainer,
  HeroSubTitle,
  HeroTitle,
  HomeContainer,
  IconContainer,
} from './styles'
import Hero from '../../assets/hero.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Coffees } from './components/Coffees'

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <Background />
        <DescriptionContainer>
          <HeroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HeroTitle>
          <HeroSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </HeroSubTitle>
          <FeatureContainer>
            <FeatureItems>
              <DescriptionFeatureContainer>
                <IconContainer color="yellow-dark">
                  <ShoppingCart weight="fill" size={20} />
                </IconContainer>
                Compra simples e segura
              </DescriptionFeatureContainer>
              <DescriptionFeatureContainer>
                <IconContainer color="base-text">
                  <Package weight="fill" size={20} />
                </IconContainer>
                Embalagem mantém o café intacto
              </DescriptionFeatureContainer>
            </FeatureItems>
            <FeatureItems>
              <DescriptionFeatureContainer>
                <IconContainer color="yellow">
                  <Timer weight="fill" size={20} />
                </IconContainer>
                Entrega rápida e rastreada
              </DescriptionFeatureContainer>
              <DescriptionFeatureContainer>
                <IconContainer color="purple">
                  <Coffee weight="fill" size={20} />
                </IconContainer>
                O café chega fresquinho até você
              </DescriptionFeatureContainer>
            </FeatureItems>
          </FeatureContainer>
        </DescriptionContainer>
        <img src={Hero} alt="" />
      </HeroContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>
      <Coffees />
    </HomeContainer>
  )
}
