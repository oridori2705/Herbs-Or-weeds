import { css } from '@emotion/react'
import { Theme } from './Theme'

const GlobalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.bgColor};
    color: ${theme.fontColor};
  }
`

export default GlobalStyle
