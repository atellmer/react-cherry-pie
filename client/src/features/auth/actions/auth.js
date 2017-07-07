/** @flow */
const actionTypes = {
  SIGNUP_REQUEST: '[Auth] Signup Request',
  SIGNUP_SUCCESS: '[Auth] Signup Success',
  SIGNUP_FAILURE: '[Auth] Signup Failure',
  SIGNIN_REQUEST: '[Auth] Signin Request',
  SIGNIN_SUCCESS: '[Auth] Signin Success',
  SIGNIN_FAILURE: '[Auth] Signin Failure',
  SIGNOUT_REQUEST: '[Auth] Signout Request',
  SIGNOUT_SUCCESS: '[Auth] Signout Success',
  SIGNOUT_FAILURE: '[Auth] Signout Failure'
};

export type signupAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

export type signinAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

export type signoutAction = {
  type: string
}

function signup(login: string, password: string): signupAction {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    payload: { login, password }
  };
}

function signin(login: string, password: string): signinAction {
  return {
    type: actionTypes.SIGNIN_REQUEST,
    payload: { login, password }
  };
}

function signout(): signoutAction {
  return {
    type: actionTypes.SIGNOUT_REQUEST
  };
}

export {
  actionTypes,
  signup,
  signin,
  signout
};
