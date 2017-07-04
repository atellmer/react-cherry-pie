/** @flow */
import styled from 'styled-components';

import * as vars from '@/vars';


const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: ${props => props.focus ? 'rgba(255, 255, 255, 0.20)' : 'rgba(255, 255, 255, 0.15)'};
  box-shadow: ${vars.shadowElevationZ1};
  transition: background-color .2s ease-in-out;
`;

const IconLayout = styled.div`
  display: flex;
  align-items: center;
`;

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 0 8px;
  width: 100%;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: calc(16 / ${vars.baseFontSize} * 1em);
`;

export {
  Root,
  IconLayout,
  InputLayout,
  Input
};
