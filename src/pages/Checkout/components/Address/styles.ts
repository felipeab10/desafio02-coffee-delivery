import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const AddressHeader = styled.header`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`
export const GridTwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 12px;
`

export const GridThreeColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 60px;
  gap: 12px;
`
interface InputProps {
  width?: string
}

export const Input = styled.input<InputProps>`
  padding: 12px;
  width: ${(props) => props.width};
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
