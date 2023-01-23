import styled from 'styled-components'

export const CheckoutButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border: none;
  color: ${(props) => props.theme['base-card']};
  background-color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  border-radius: 6px;
  margin-left: 4px;

  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
