import styled from 'styled-components'

export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 54px;
    height: 54px;
    object-fit: cover;
  }
`
export const CardProductMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CardProductActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const CardProductAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const ButtonRemoveProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  border-radius: 6px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  text-transform: uppercase;
  border: none;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CardProductPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`

export const Divider = styled.div`
  border-bottom: 1px solid #e6e5e5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 24px;
  margin-bottom: 24px;
`
