import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from 'src/module/store';
import {
    authInitialStateType,
    AuthLoginFailurePayloadActionType,
    AuthLoginPayloadActionType,
    AuthLoginSuccessPayloadActionType,
} from './authType';

const initialState: authInitialStateType = {
    loginLoading: false,
    loginData: {},
    loginError: null,
};
const sliceName = 'auth';

const reducers = {
    authLogin: (state = initialState, action: PayloadAction<AuthLoginPayloadActionType>) => {
        state.loginLoading = true;
        state.loginError = null;
    },
    authLoginSuccess: (state, action: PayloadAction<AuthLoginSuccessPayloadActionType>) => {
        console.log(action.payload);
        state.loginLoading = false;
        state.loginData = action.payload;
        state.loginError = null;
        localStorage.setItem('username', action.payload.username);
        localStorage.setItem('accessToken', action.payload.accessToken);

        alert('로그인 되었습니다');
        location.href = '/';
    },
    authLoginFailure: (state, action: PayloadAction<AuthLoginFailurePayloadActionType>) => {
        state.loginLoading = false;
        state.loginError = action.payload.error;
    },
};

const themeSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = themeSlice;
export const { authLogin, authLoginSuccess, authLoginFailure } = actions;
export const authDateState = (state: StoreType) => state.auth;

export default reducer;
