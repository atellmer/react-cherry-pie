/** @flow */
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${vars.backgroundColor};
`;

const ContentLayout = styled.div`
  padding: 48px 0 49px;
  padding-bottom: ${props => props.paddingBottom > 0 ? `${props.paddingBottom}px` : ''};
  width: 100%;
  height: 100%;
`;

const ScrollableView = styled(Scrollbars)`
  width: 100%;
  height: 100%;
`;

const DialogFormLayout = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export {
  Root,
  ContentLayout,
  ScrollableView,
  DialogFormLayout
};
