/** @flow */
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';


const Root = styled.div`
  position: relative;
`;

const ScrollableView = styled(Scrollbars)`
  width: 100%;
  height: calc(100vh - 152px) !important;
`;

export {
  Root,
  ScrollableView
};
