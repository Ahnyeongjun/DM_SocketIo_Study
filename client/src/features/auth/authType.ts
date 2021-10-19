export type authInitialStateType = {
    loginLoading: boolean;
    loginData: {};
    loginError: null;
};

export type AuthLoginFailurePayloadActionType = {
    error: string;
};

export type User = {
    id: string;
    password: string;
};
export type AuthLoginSuccessPayloadActionType = {
    username: string;
    accessToken: string;
};

export type AuthLoginPayloadActionType = {
    user: User;
};
export type loginData = {
    id: string;
    password: string;
};
