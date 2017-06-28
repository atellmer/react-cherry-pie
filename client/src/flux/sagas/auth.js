/** @flow */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes as AuthActionTypes } from '../actions/auth';
import { history } from '@/routing/routing';
import addUser from '@/features/auth/services/addUser';
import checkUser from '@/features/auth/services/checkUser';


function* register({ payload: { login, password } }) {
  try {
    const { user } = yield call(addUser, login, password);

    yield put({
      type: AuthActionTypes.REGISTER_SUCCESS,
      payload: { user }
    });

    history.push('/login');
  } catch (error) {
    yield put({
      type: AuthActionTypes.REGISTER_FAILURET,
      payload: { error }
    });
  }
}

function* authorize({ payload: { login, password } }) {
  try {
    const { user, token } = yield call(checkUser, login, password);

    yield put({
      type: AuthActionTypes.AUTHORIZE_SUCCESS,
      payload: { user }
    });

    localStorage.setItem('token', JSON.stringify(token));
    history.push('/messenger');
  } catch (error) {
    yield put({
      type: AuthActionTypes.AUTHORIZE_FAILURE,
      payload: { error }
    });

    localStorage.removeItem('token');
  }
}

function* authSaga() {
  yield takeLatest(AuthActionTypes.REGISTER_REQUEST, register);
  yield takeLatest(AuthActionTypes.AUTHORIZE_REQUEST, authorize);
}

export default authSaga;
