/** @flow */
import * as types from '../constants/ActionTypes';
import DeviceDetector from 'device-detect.js/lib/device';

type DetectDeviceAction = {
  type: string,
  payload: {
    isPhone: boolean,
    isTablet: boolean,
    isDesktop: boolean
  }
}

type detectSizeWindowAction = {
  type: string,
  payload: {
    width: number,
    height: number
  }
}

export function detectDevice(): DetectDeviceAction {
  const isPhone: boolean = DeviceDetector.mobile();
  const isTablet: boolean = DeviceDetector.tablet();
  const isDesktop: boolean = DeviceDetector.desktop();

  return {
    type: types.CURRENT_DEVICE,
    payload: {
      isPhone,
      isTablet,
      isDesktop
    }
  };
}

export function detectSizeWindow(): detectSizeWindowAction {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    type: types.CHANGE_WIDTH_OR_HEIGHT_WINDOW,
    payload: {
      width,
      height
    }
  };
}
