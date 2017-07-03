/** @flow */
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  padding: 48px 0 0;
  width: 100%;
  height: 100%;
  background-color: ${vars.backgroundColor};
`;

const ScrollableView = styled(Scrollbars)`
  width: 100%;
  height: 100%;
`;

export {
  Root,
  ScrollableView
};
