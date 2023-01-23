import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const LocalidadeButton = styled.button`
  display: flex;
  gap: 4px;
  background: ${(props) => props.theme['purple-light']};
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  border: none;
`

export const CheckoutButton = styled.div`
  z-index: 2;
  position: relative;
  a {
    cursor: pointer;
    text-decoration: none;
    padding: 8px;
    gap: 4px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border: none;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    right: -15px;
    top: -10px;
    background: ${(props) => props.theme['yellow-dark']};
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    padding: 5px 10px;
    font-size: 20px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: -0.06em;
    color: ${(props) => props.theme.white};
  }
`
