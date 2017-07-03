/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${vars.primaryColorSecond};
  box-shadow: ${vars.shadowElevationZ1};
`;

const HeaderLayout = styled.div`
  background-color: ${vars.primaryColorFirst};
`;

const LogoLayout = styled.div`
  padding: 0 16px;
  min-height: 48px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

const SearchbarLayout = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

const ContentLayout = styled.div`
`;

export {
  Root,
  HeaderLayout,
  LogoLayout,
  SearchbarLayout,
  ContentLayout
};
