/** @flow */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes as AuthActionTypes } from '../actions/auth';
import { history } from '@/routing/routing';
import checkUser from '@/features/auth/services/checkUser';


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
  yield takeLatest(AuthActionTypes.AUTHORIZE_REQUEST, authorize);
}

export default authSaga;
