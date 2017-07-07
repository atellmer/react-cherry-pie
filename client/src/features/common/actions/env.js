/** @flow */
import DeviceDetector from 'device-detect.js/lib/device';


const actionTypes = {
  DETECT_DEVICE:  '[Common] Detect Device',
  RESIZE_WINDOW: '[Common] Resize Window'
};

type detectDeviceAction = {
  type: string,
  payload: {
    isPhone: boolean,
    isTablet: boolean,
    isDesktop: boolean,
    isLandscape: boolean,
    isPortrait: boolean,
    isIOS: boolean,
    isAndroid: boolean
  }
}

type detectSizeWindowAction = {
  type: string,
  payload: {
    width: number,
    height: number
  }
}

function detectDevice(): detectDeviceAction {
  const isPhone: boolean = DeviceDetector.mobile();
  const isTablet: boolean = DeviceDetector.tablet();
  const isDesktop: boolean = DeviceDetector.desktop();
  const isLandscape: boolean = DeviceDetector.landscape();
  const isPortrait: boolean = DeviceDetector.portrait();
  const isIOS: boolean = DeviceDetector.ios();
  const isAndroid: boolean = DeviceDetector.android();

  return {
    type: actionTypes.DETECT_DEVICE,
    payload: {
      isPhone,
      isTablet,
      isDesktop,
      isLandscape,
      isPortrait,
      isIOS,
      isAndroid
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
  actionTypes,
  detectDevice,
  detectSizeWindow
};
