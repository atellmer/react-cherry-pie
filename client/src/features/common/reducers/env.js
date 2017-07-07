/** @flow */
import { actionTypes } from '../actions/env';


type State = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  isLandscape: boolean,
  isPortrait: boolean,
  isIOS: boolean,
  isAndroid: boolean,
  width: number,
  height: number
}

const initialState = {
  isPhone: false,
  isTablet: false,
  isDesktop: false,
  isLandscape: false,
  isPortrait: false,
  isIOS: false,
  isAndroid: false,
  width: 0,
  height: 0
};

function env(state: State = initialState, action: any) {
  switch (action.type) {
  case actionTypes.DETECT_DEVICE: {
    const { payload: {
      isPhone,
      isTablet,
      isDesktop,
      isLandscape,
      isPortrait,
      isIOS,
      isAndroid
    } } = action;

    return {
      ...state,
      isPhone,
      isTablet,
      isDesktop,
      isLandscape,
      isPortrait,
      isIOS,
      isAndroid
    };
  }
  case actionTypes.RESIZE_WINDOW: {
    const { payload: { width, height } } = action;

    return {
      ...state,
      width,
      height
    };
  }
  default:
    return state;
  }
}

export default env;
