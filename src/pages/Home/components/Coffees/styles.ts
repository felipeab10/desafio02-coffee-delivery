import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2rem;
`

export const CoffeeHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  img {
    margin-bottom: 12px;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    color: #c47f17;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`
export const CoffeeTypeContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    align-items: flex-end;
    text-align: center;
    line-height: 130%;
  }

  p {
    margin-top: 8px;
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    text-align: right;
    margin-right: 23px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`
