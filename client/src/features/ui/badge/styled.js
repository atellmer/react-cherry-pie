/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 3px;
  min-width: 16px;
  min-height: 16px;
  border-radius: 6px;
  background-color: ${vars.accentColor};
  color: #fff;
  font-weight: 300;
  font-size: calc(11 / ${vars.baseFontSize} * 1em);
  line-height: 0;
`;

export {
  Root
};
