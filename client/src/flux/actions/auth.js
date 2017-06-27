/** @flow */

type authorizeAction = {
  type: string,
  payload: {
    userName: string | null,
    userPass: string | null,
  }
}

type LogoutAction = {
  type: string
}

export const actionTypes = {
  AUTH_REQUEST: '[Auth] Auth Request',
  AUTH_SUCCESS: '[Auth] Auth Success',
  AUTH_FAILURE: '[Auth] Auth Failure',
  LOGOUT: '[Auth] Logout'
};

export function authorize(login, password): authorizeAction {
  return {
    type: actionTypes.AUTH_REQUEST,
    payload: { login, password }
  };
}

export function logout(): LogoutAction {
  return {
    type: actionTypes.LOGOUT
  };
}
