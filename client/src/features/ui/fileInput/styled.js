/** @flow */
import styled from 'styled-components';


const Root = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export {
  Root,
  Input
};
