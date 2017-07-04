/** @flow */
const actionTypes = {
  REGISTER_REQUEST: '[Auth] Register Request',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAILURE: '[Auth] Register Failure',
  AUTHORIZE_REQUEST: '[Auth] Authorize Request',
  AUTHORIZE_SUCCESS: '[Auth] Authorize Success',
  AUTHORIZE_FAILURE: '[Auth] Authorize Failure',
  LOGOUT: '[Auth] Logout'
};

export type registerAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

export type authorizeAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

export type LogoutAction = {
  type: string
}

function register(login: string, password: string): registerAction {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: { login, password }
  };
}

function authorize(login: string, password: string): authorizeAction {
  return {
    type: actionTypes.AUTHORIZE_REQUEST,
    payload: { login, password }
  };
}

function logout(): LogoutAction {
  return {
    type: actionTypes.LOGOUT
  };
}

export {
  actionTypes,
  register,
  authorize,
  logout
};
