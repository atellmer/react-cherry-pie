/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 42px;
  width: 100%;
  height: auto;
  background-color: ${vars.primaryColorFirst};
  box-shadow: ${vars.shadowElevationZ1};
  transition: height .2s ease-in-out;

  @media (min-width: ${vars.phone}px) {
    min-height: 48px;
  }
`;

const ArrowBackLayout = styled.div`
  margin: 0 0 0 -16px;

  button {
    @media (max-width: ${vars.phone}px) {
      padding: 9px !important;
      width: 42px !important;
      height: 42px !important;
    }
  }
`;

const ControlsLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const AvatarLayout = styled.div`
  margin: 2px;
`;

const IconButtonLayout = styled.div`
  margin: 0 -16px 0 0;

  button {
    @media (max-width: ${vars.phone}px) {
      padding: 9px !important;
      width: 42px !important;
      height: 42px !important;
    }
  }
`;

export {
  Root,
  ArrowBackLayout,
  ControlsLayout,
  AvatarLayout,
  IconButtonLayout
};
