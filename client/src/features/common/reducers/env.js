/** @flow */
import { actionTypes } from '../actions/env';


type State = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  width: number,
  height: number
}

const initialState = {
  isPhone: false,
  isTablet: false,
  isDesktop: false,
  width: 0,
  height: 0
};

function env(state: State = initialState, action) {
  switch (action.type) {
  case actionTypes.DETECT_DEVICE: {
    const { payload: { isPhone, isTablet, isDesktop } } = action;

    return {
      ...state,
      isPhone,
      isTablet,
      isDesktop
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
