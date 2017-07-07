/** @flow */
import { call, put, takeLatest, select } from 'redux-saga/effects';

import { actionTypes } from '../actions/auth';
import addUser from '../services/addUser';
import checkUser from '../services/checkUser';
import { history } from '@/shell';
import { MESSENGER_ROUTE } from '@/vars';


function* signup({ payload: { login, password } }): Generator<*, *, *> {
  try {
    const { success } = yield call(addUser, login, password);

    yield put({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: { success }
    });

    history.push('/signin');
  } catch (error) {
    yield put({
      type: actionTypes.SIGNUP_FAILURE,
      payload: { error }
    });
  }
}

function* signin({ payload: { login, password } }): Generator<*, *, *> {
  try {
    const { success, user, token } = yield call(checkUser, login, password);

    yield put({
      type: actionTypes.SIGNIN_SUCCESS,
      payload: { success, user }
    });

    localStorage.setItem('token', JSON.stringify(token));
    history.push(`/${MESSENGER_ROUTE}`);
  } catch (error) {
    const { success, msg } = error;

    yield put({
      type: actionTypes.SIGNIN_FAILURE,
      payload: { success, error: msg }
    });

    localStorage.removeItem('token');
  }
}

function* signout(): Generator<*, *, *> {
  try {
    yield put({
      type: actionTypes.SIGNOUT_SUCCESS
    });

    localStorage.removeItem('APP_STATE');
    localStorage.removeItem('token');
    history.push('/signin');
  } catch (error) {
    yield put({
      type: actionTypes.SIGNOUT_FAILURE,
      payload: { error }
    });
  }
}

function* saveState(): Generator<*, *, *> {
  const state = yield select(st => st);

  localStorage.setItem('APP_STATE', JSON.stringify(state));
}

function* authSaga(): Generator<*, *, *> {
  yield takeLatest(actionTypes.SIGNUP_REQUEST, signup);
  yield takeLatest(actionTypes.SIGNIN_REQUEST, signin);
  yield takeLatest(actionTypes.SIGNOUT_REQUEST, signout);
  yield takeLatest(actionTypes.SIGNIN_SUCCESS, saveState);
}

export default authSaga;
