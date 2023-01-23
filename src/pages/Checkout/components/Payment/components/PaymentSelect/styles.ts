import styled from 'styled-components'

interface PaymentSelectProps {
  isActive?: boolean
}

export const ButtonContainer = styled.button<PaymentSelectProps>`
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 12px;
  border-radius: 6px;
  border: none;
  width: 195px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  background: ${(props) => props.theme['base-button']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  ${(props) => {
    if (props.isActive) {
      return `
      background: ${props.theme['purple-light']};
      border: 1px solid ${props.theme.purple};
      `
    }
  }}
`
export const Items = styled.div`
  display: flex;
  gap: 12px;
`
