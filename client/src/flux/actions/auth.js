/** @flow */
type registerAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

type authorizeAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

type LogoutAction = {
  type: string
}

export const actionTypes = {
  REGISTER_REQUEST: '[Auth] Register Request',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAILURET: '[Auth] Register Failure',
  AUTHORIZE_REQUEST: '[Auth] Authorize Request',
  AUTHORIZE_SUCCESS: '[Auth] Authorize Success',
  AUTHORIZE_FAILURE: '[Auth] Authorize Failure',
  LOGOUT: '[Auth] Logout'
};

export function register(login, password): registerAction {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: { login, password }
  };
}

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
