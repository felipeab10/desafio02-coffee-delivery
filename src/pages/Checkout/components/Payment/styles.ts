import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  gap: 32px;
`

export const PaymentHeader = styled.header`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const PaymentType = styled.div`
  display: flex;
  gap: 12px;
`
