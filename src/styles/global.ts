import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
   display: flex;
   background: ${(props) => props.theme.background};
   max-width: 1440px;
   flex-direction: column;
   justify-content: center;
   margin: 0 auto;
 }

body, input, textarea,button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;

}


`
