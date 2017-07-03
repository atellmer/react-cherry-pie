/** @flow */
export const actionTypes = {
  REGISTER_REQUEST: '[Auth] Register Request',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAILURET: '[Auth] Register Failure',
  AUTHORIZE_REQUEST: '[Auth] Authorize Request',
  AUTHORIZE_SUCCESS: '[Auth] Authorize Success',
  AUTHORIZE_FAILURE: '[Auth] Authorize Failure',
  LOGOUT: '[Auth] Logout'
};

type registerAction = {
  type: actionTypes.REGISTER_REQUEST,
  payload: {
    login: string | null,
    password: string | null
  }
}

type authorizeAction = {
  type: actionTypes.AUTHORIZE_REQUEST,
  payload: {
    login: string | null,
    password: string | null
  }
}

type LogoutAction = {
  type: actionTypes.LOGOUT
}

function register(login, password): registerAction {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: { login, password }
  };
}

function authorize(login, password): authorizeAction {
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
  register,
  authorize,
  logout
};
