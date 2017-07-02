/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';


const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AppbarLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${vars.appbarZIndex};
  width: 100%;
  height: auto;
`;

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  Root,
  AppbarLayout,
  ContentLayout
};
