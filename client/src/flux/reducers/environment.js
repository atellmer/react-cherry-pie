/** @flow */
import * as types from '../constants/ActionTypes';

type State = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  width: number,
  height: number
}

type Action = {
  type: string,
  payload: any
}

const initialState = {
  isPhone: false,
  isTablet: false,
  isDesktop: false,
  width: 0,
  height: 0
};

export default function environment(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.CURRENT_DEVICE:
    return {
      ...state,
      isPhone: action.payload.isPhone,
      isTablet: action.payload.isTablet,
      isDesktop: action.payload.isDesktop
    };

  case types.CHANGE_WIDTH_OR_HEIGHT_WINDOW:
    return {
      ...state,
      width: action.payload.width,
      height: action.payload.height
    };

  default:
    return state;
  }
}
