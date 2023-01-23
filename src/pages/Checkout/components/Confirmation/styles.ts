import styled from 'styled-components'

export const ConfirmationContainer = styled.div``

export const Tittle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ProductList = styled.div`
  h1 {
    font-size: 1rem;
    padding-top: 30px;
  }
`
export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
`
