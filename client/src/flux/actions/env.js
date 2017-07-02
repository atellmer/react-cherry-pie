/** @flow */
import DeviceDetector from 'device-detect.js/lib/device';


export const actionTypes = {
  DETECT_DEVICE:  '[Env] Detect Device',
  RESIZE_WINDOW: '[Env] Resize Window'
};

type DetectDeviceAction = {
  type: actionTypes.DETECT_DEVICE,
  payload: {
    isPhone: boolean,
    isTablet: boolean,
    isDesktop: boolean
  }
}

type detectSizeWindowAction = {
  type: actionTypes.RESIZE_WINDOW,
  payload: {
    width: number,
    height: number
  }
}

function detectDevice(): DetectDeviceAction {
  const isPhone: boolean = DeviceDetector.mobile();
  const isTablet: boolean = DeviceDetector.tablet();
  const isDesktop: boolean = DeviceDetector.desktop();

  return {
    type: actionTypes.DETECT_DEVICE,
    payload: {
      isPhone,
      isTablet,
      isDesktop
    }
  };
}

function detectSizeWindow(): detectSizeWindowAction {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    type: actionTypes.RESIZE_WINDOW,
    payload: {
      width,
      height
    }
  };
}

export {
  detectDevice,
  detectSizeWindow
};
