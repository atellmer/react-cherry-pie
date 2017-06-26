/** @flow */
import * as types from '../constants/ActionTypes';


type LoginAction = {
  type: string,
  payload: {
    userName: string | null,
    userPass: string | null,
  }
}

type LogoutAction = {
  type: string
}

export function login({ userName, userPass }): LoginAction {
  return {
    type: types.LOGIN,
    payload: {
      userName,
      userPass
    }
  };
}

export function logout(): LogoutAction {
  return {
    type: types.LOGOUT
  };
}
