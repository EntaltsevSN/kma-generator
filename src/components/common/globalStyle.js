import { createGlobalStyle } from 'styled-components';

import { Font, Color, Spacer } from './variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: ${Font.size};
    font-weight: ${Font.weight};
    font-family: ${Font.family};
    line-height: ${Font.lineHeight};
    color: ${Color.text};
    background-color: ${Color.body};
  }

  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 ${Spacer.big};
  }

  li {
    margin-bottom: calc(${Spacer.big} / 2);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6, 
  .h6 {
    font-weight: ${Font.weightHeading};
    font-family: ${Font.familyHeading};
  }

  h1,
  .h1 {
    font-size: calc(${Font.sizeH1});
  }

  h2,
  .h2 {
    font-size: calc(${Font.sizeH2});
  }

  h3,
  .h3 {
    font-size: calc(${Font.sizeH3});
  }

  h4,
  .h4 {
    font-size: calc(${Font.sizeH4});
  }

  h5,
  .h5 {
    font-size: calc(${Font.sizeH5});
  }

  h6,
  .h6 {
    font-size: calc(${Font.sizeH6});
  }

  a {
    color: ${Color.primary};
    text-decoration: none;
  }

  .is-hidden {
    display: none;
  }

  .application {
    display: none;
  }
`;

export default GlobalStyle;