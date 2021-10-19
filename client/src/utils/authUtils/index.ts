export const checkIsLogin = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');

        // if (accessToken) {
        //     const httpMethod = methodType.POST;
        //     const requestUrl = ACCOUNT_URL.checkToken();
        //     const body = "";
        //     const headers  =
        //     const res = call(requestApiWithBody, { httpMethod, requestUrl, body, headers });
        // }

        if (!accessToken) {
            alert('로그인이 되어있지 않습니다.');
            location.href = '/';
            throw Error('There is no access token.');
        }

        return true;
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다.');
    location.href = '/';
};
