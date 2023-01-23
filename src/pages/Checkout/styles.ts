import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem 10rem;
  gap: 32px;
`

export const LeftSideContainer = styled.div`
  display: flex;

  gap: 15px;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`
export const ListProductSelected = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;
  justify-content: space-between;

  background: ${(props) => props.theme['base-card']};
`

export const FinishBuy = styled.button`
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.yellow};

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: not-allowed;
  }
`
