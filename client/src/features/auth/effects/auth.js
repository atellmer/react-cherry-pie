/** @flow */
import {
  call,
  put,
  takeLatest,
  select
} from 'redux-saga/effects';

import { actionTypes } from '../actions/auth';
import {
  signupSuccess as signupSuccessAction,
  signupFailure as signupFailureAction,
  signinSuccess as signinSuccessAction,
  signinFailure as signinFailureAction,
  signoutSuccess as signoutSuccessAction,
  signoutFailure as signoutFailureAction
} from '../actions/auth';
import addUser from '../services/addUser';
import checkUser from '../services/checkUser';
import { history } from '@/shell';
import { MESSENGER_ROUTE } from '@/vars';


function* signup({ payload: { login, password } }): Generator<*, *, *> {
  try {
    const { success } = yield call(addUser, login, password);

    yield put(signupSuccessAction(success));

    history.push('/signin');
  } catch (error) {
    yield put(signupFailureAction(error));
  }
}

function* signin({ payload: { login, password } }): Generator<*, *, *> {
  try {
    const { success, user, token } = yield call(checkUser, login, password);

    yield put(signinSuccessAction(success, user));

    localStorage.setItem('token', JSON.stringify(token));
    history.push(`/${MESSENGER_ROUTE}`);

    const state = yield select(st => st);

    localStorage.setItem('APP_STATE', JSON.stringify(state));
  } catch (error) {
    const { success, msg } = error;

    yield put(signinFailureAction(success, msg));

    localStorage.removeItem('token');
  }
}

function* signout(): Generator<*, *, *> {
  try {
    yield put(signoutSuccessAction());

    localStorage.removeItem('APP_STATE');
    localStorage.removeItem('token');
    history.push('/signin');
  } catch (error) {
    yield put(signoutFailureAction(error));
  }
}

function* authSaga(): Generator<*, *, *> {
  yield takeLatest(actionTypes.SIGNUP_REQUEST, signup);
  yield takeLatest(actionTypes.SIGNIN_REQUEST, signin);
  yield takeLatest(actionTypes.SIGNOUT_REQUEST, signout);
}

export default authSaga;
