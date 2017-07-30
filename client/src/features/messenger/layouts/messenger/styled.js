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
  display: flex;
  flex-flow: row nowrap;
  overflow-x: hidden;
`;

const DialogPanelLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${vars.zIndex1};
  transition: transform .2s ease-in-out;

  @media (min-width: ${vars.phone}px) {
    position: relative;
    width: 300px;
    z-index: ${vars.zIndex2};
  }

  @media (min-width: ${vars.tablet}px) {
    width: 320px;
  }
`;

const TransitionLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${vars.zIndex1};
  box-shadow: ${vars.shadowElevationZ1};
  transform: ${props => props.isActive ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'};
  transition: transform .2s ease-in-out;

  @media (min-width:  ${vars.phone}px) {
    position: relative;
    width: calc(100% - 300px);
    transform: translate3d(0, 0, 0);
  }

  @media (min-width:  ${vars.tablet}px) {
    width: calc(100% - 320px);
  }
`;

export {
  Root,
  DialogPanelLayout,
  TransitionLayout
};
