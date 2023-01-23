import styled from 'styled-components'
import HeroBackground from '../../assets/herobackground.png'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main`
  display: flex;
  margin-top: 5rem;
  padding: 2rem 10rem;
  gap: 3.5rem;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 476px;
    height: 360px;
    object-fit: cover;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    img {
      width: 350px;
      height: 280px;
      object-fit: cover;
      margin-top: 20px;
    }
  }
`
export const Background = styled.div`
  background-image: url(${HeroBackground});
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  z-index: 1;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(80px);
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeroTitle = styled.span`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  line-height: 1.3;
  color: ${(props) => props.theme['base-title']};
`
export const HeroSubTitle = styled.span`
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
  z-index: 1;
`
export const FeatureContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 4rem;
  flex-direction: column;
`
export const FeatureItems = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  z-index: 9999;
`

const IconToColorMap = {
  'yellow-dark': {
    value: defaultTheme['yellow-dark'],
  },
  'base-text': {
    value: defaultTheme['base-text'],
  },
  yellow: {
    value: defaultTheme.yellow,
  },
  purple: {
    value: defaultTheme.purple,
  },
} as const

interface IconContainerProps {
  color: keyof typeof IconToColorMap
}

const IconBase = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 1000px;
  color: ${(props) => props.theme.white};
`

export const IconContainer = styled(IconBase)`
  background: ${(props) => IconToColorMap[props.color].value};
`

export const DescriptionFeatureContainer = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
  align-items: center;
`

export const CoffeeTitle = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
