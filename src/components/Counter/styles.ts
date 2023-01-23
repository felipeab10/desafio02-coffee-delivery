import styled from 'styled-components'

export const SelectedProductContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
  @media screen and (max-width: 820px) {
    margin-right: 8px;
  }
`
const CounterButtonBase = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
`

export const DecreaseItem = styled(CounterButtonBase)``
export const IncreaseItem = styled(CounterButtonBase)``
