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

export type signupRequestAction = {
  type: string,
  payload: {
    login: string,
    password: string
  }
}

export type signupSuccessAction = {
  type: string,
  payload: {
    success: boolean,
  }
}

export type signupFailureAction = {
  type: string,
  payload: {
    error: string | null,
  }
}

export type signinAction = {
  type: string,
  payload: {
    login: string | null,
    password: string | null
  }
}

export type signinSuccessAction = {
  type: string,
  payload: {
    success: boolean,
    user: any
  }
}

export type signinFailureAction = {
  type: string,
  payload: {
    success: boolean,
    error: string | null,
  }
}

export type signoutAction = {
  type: string
}

export type signoutSuccessAction = {
  type: string
}

export type signoutFailureAction = {
  type: string,
  payload: {
    error: string | null
  }
}

function signup(login: string, password: string): signupRequestAction {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    payload: { login, password }
  };
}

function signupSuccess(success: boolean): signupSuccessAction {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: { success }
  };
}

function signupFailure(error: string): signupFailureAction {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    payload: { error }
  };
}

function signin(login: string, password: string): signinAction {
  return {
    type: actionTypes.SIGNIN_REQUEST,
    payload: { login, password }
  };
}

function signinSuccess(success: boolean, user: any): signinSuccessAction {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: { success, user }
  };
}

function signinFailure(success: boolean, error: string): signinFailureAction {
  return {
    type: actionTypes.SIGNIN_FAILURE,
    payload: { success, error }
  };
}

function signout(): signoutAction {
  return {
    type: actionTypes.SIGNOUT_REQUEST
  };
}

function signoutSuccess(): signoutSuccessAction {
  return {
    type: actionTypes.SIGNOUT_SUCCESS
  };
}

function signoutFailure(error: string): signoutFailureAction {
  return {
    type: actionTypes.SIGNOUT_FAILURE,
    payload: { error }
  };
}

export {
  actionTypes,
  signup,
  signupSuccess,
  signupFailure,
  signin,
  signinSuccess,
  signinFailure,
  signout,
  signoutSuccess,
  signoutFailure
};
