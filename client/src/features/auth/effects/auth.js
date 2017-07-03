/** @flow */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../actions/auth';
import addUser from '../services/addUser';
import checkUser from '../services/checkUser';
import { history } from '@/shell';


function* register({ payload: { login, password } }) {
  try {
    const { user } = yield call(addUser, login, password);

    yield put({
      type: actionTypes.REGISTER_SUCCESS,
      payload: { user }
    });

    history.push('/login');
  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_FAILURET,
      payload: { error }
    });
  }
}

function* authorize({ payload: { login, password } }) {
  try {
    const { user, token } = yield call(checkUser, login, password);

    yield put({
      type: actionTypes.AUTHORIZE_SUCCESS,
      payload: { user }
    });

    localStorage.setItem('token', JSON.stringify(token));
    history.push('/messenger');
  } catch (error) {
    yield put({
      type: actionTypes.AUTHORIZE_FAILURE,
      payload: { error }
    });

    localStorage.removeItem('token');
  }
}

function* authSaga() {
  yield takeLatest(actionTypes.REGISTER_REQUEST, register);
  yield takeLatest(actionTypes.AUTHORIZE_REQUEST, authorize);
}

export default authSaga;
