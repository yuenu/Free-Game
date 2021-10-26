import { createGlobalStyle } from 'styled-components'
import { fontFamily } from 'styles/fonts'
import { primaryColor } from 'styles/theme'

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: ${fontFamily};
    box-sizing: inherit;
    background-color: ${primaryColor};
  }

  img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  ul,
  li {
    list-style: none;
  }
`

export default GlobalStyles
