/** @flow */
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

import * as vars from '@/vars';


const Root = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  font-size: calc(14 / ${vars.baseFontSize} * 1em);
  overflow-x: hidden;
  background-color: ${vars.textareaPhoneBackground};
  padding: 8px;

  @media (min-width: ${vars.phone}px) {
    background-color: transparent;
  }
`;

export {
  Root
};
