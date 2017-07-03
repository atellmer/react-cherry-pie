/** @flow */
import React from 'react';
import { connect } from 'react-redux';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  heightWindow: number
}

function withPlatform(WrappedComponent) {
  function WithPlatform(props: Props) {
    return (
      <WrappedComponent {...props}/>
    );
  }

  function mapStateToProps({ common }) {
    const { env: { isPhone, isTablet, isDesktop, width, height } }  = common;

    return {
      isPhone,
      isTablet,
      isDesktop,
      widthWindow: width,
      heightWindow: height
    };
  }

  return connect(mapStateToProps)(WithPlatform);
}

export default withPlatform;
