import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const SuccessContainer = styled.div`
  display: flex;
  padding: 2rem 10rem;
  align-items: end;
  justify-content: space-between;
`
export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const MainInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

export const DeliveryInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
  }
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

export const Svg = styled.div<IconContainerProps>`
  display: flex;
  background-color: ${(props) => IconToColorMap[props.color].value};
  padding: 8px;
  gap: 8px;
  border-radius: 1000px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    text-transform: capitalize;
  }
`
