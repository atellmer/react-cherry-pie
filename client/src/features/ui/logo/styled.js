/** @flow */
import styled from 'styled-components';

import LogoImage from '../../../assets/images/logo.png';


const Root = styled.div`
  width: calc(820px / 11);
  height: calc(323px / 11);
  background-image: url(${LogoImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all .2s ease-in-out;
`;

export {
  Root
};
