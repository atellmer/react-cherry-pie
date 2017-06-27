/** @flow */

type authorizeAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null,
  }
}

type LogoutAction = {
  type: string
}

export const actionTypes = {
  AUTHORIZE_REQUEST: '[Auth] Authorize Request',
  AUTHORIZE_SUCCESS: '[Auth] Authorize Success',
  AUTHORIZE_FAILURE: '[Auth] Authorize Failure',
  LOGOUT: '[Auth] Logout'
};

export function authorize(login, password): authorizeAction {
  return {
    type: actionTypes.AUTHORIZE_REQUEST,
    payload: { login, password }
  };
}

export function logout(): LogoutAction {
  return {
    type: actionTypes.LOGOUT
  };
}
