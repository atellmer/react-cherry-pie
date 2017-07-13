/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${vars.mainLayoutWidth}px;
  margin: 0 auto;
  padding: 64px 15px 15px;
  background-color: ${vars.backgroundColor};
`;

export {
  Root
};
