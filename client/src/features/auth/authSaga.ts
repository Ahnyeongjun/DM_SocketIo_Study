import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import { AuthLoginPayloadActionType } from './authType';
import { methodType, requestApiWithBody } from '../../lib/requestLib';
import { ACCOUNT_URL } from '../../lib/apiUrlLib';
import { authLogin, authLoginFailure, authLoginSuccess } from './authSlice';
function* authLoginSaga(action: PayloadAction<AuthLoginPayloadActionType>) {
    try {
        console.log(action.payload);

        const { id, password } = action.payload.user;
        const httpMethod = methodType.POST;
        const requestUrl = ACCOUNT_URL.login();
        console.log(requestUrl);
        const body = { id, password };
        const headers = '';
        const res = yield call(requestApiWithBody, { httpMethod, requestUrl, body, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(authLoginSuccess(newResDataObj));
            location.href = '/';
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
        yield put(authLoginFailure(error));
    }
}

function* watchToggleLogin() {
    yield takeLatest(authLogin.type, authLoginSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleLogin)]);
}
