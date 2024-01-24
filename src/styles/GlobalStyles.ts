import { css } from '@emotion/react'
import { Theme } from './Theme'

const GlobalStyle = (theme: Theme) => css`
  @font-face {
    font-family: 'Murukmuruk';
    src: url('src/assets/fonts/KCC-Murukmuruk.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMJUA';
    src: url('src/assets/fonts/BMJUA.ttf');
    font-weight: lighter;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    background: transparent;
    font-family: 'BMJUA';
    color: ${theme.fontColor};
    cursor: pointer;
  }

  input,
  textarea {
    border: none;
    outline: none;
    background-color: ${theme.bgColor};
    &::placeholder {
      font-family: ${theme.fontColor};
    }
  }
  body {
    font-family: 'BMJUA';
    background: ${theme.bgGradient};
    color: ${theme.fontColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
