/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

import * as vars from '@/vars';


injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: ${vars.baseFontSize}px;
    font-family: 'Roboto';
    -webkit-tap-highlight-color: transparent;
    background-color: cornflowerblue;
  }

  #react-root,
  [data-reactroot] {
    width: 100%;
    height: 100%;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity .25s ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0;
    transition: opacity .25s ease-in;
  }
`;
