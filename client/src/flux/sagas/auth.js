/** @flow */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes as AuthActionTypes } from '../actions/auth';
import { history } from '@/routing/routing';

function getUser(login, password) {
  const promise = new Promise((resolve, reject) => {
    if (login === 'alex' && password === '123') {
      resolve({
        _id: '1',
        name: 'Alex'
      });
    } else {
      reject('User is not existing');
    }
  });

  return promise;
}

function* authorize({ payload: { login, password } }) {
  try {
    const user = yield call(getUser, login, password);

    yield put({
      type: AuthActionTypes.AUTH_SUCCESS,
      payload: {
        status: 'ok',
        user
      }
    });

    localStorage.setItem('user', user);
    history.push('/messenger');
  } catch (error) {
    yield put({
      type: AuthActionTypes.AUTH_FAILURE,
      payload: {
        status: 'error',
        error
      }
    });

    localStorage.removeItem('user');
  }
}

function* authSaga() {
  yield takeLatest(AuthActionTypes.AUTH_REQUEST, authorize);
}

export default authSaga;
