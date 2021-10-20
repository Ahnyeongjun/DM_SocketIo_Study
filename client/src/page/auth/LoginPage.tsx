import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../features/auth/authSlice';

import * as S from './styles';

const LoginPage = () => {
    const [isSuccess, setIsSuccess] = useState(true);
    const [user, setUser] = useState({ id: '', password: '' });
    const { id, password } = user;
    useMemo(() => {
        document.title = `Login | YoungJun`;
    }, []);
    const onChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const dispatch = useDispatch();

    const onClickLogin = () => {
        dispatch(authLogin({ user: user }));
    };
    return (
        <>
            {isSuccess ? (
                <S.LoginWrapper>
                    <S.MyImage>
                        <S.Image src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    </S.MyImage>
                    <S.TopContent>Sign in</S.TopContent>
                    <S.InputWrapper>
                        <S.Login_Id placeholder="아이드를 입력하세요" onChange={onChange} value={id} name="id" />
                        <S.Login_password
                            placeholder="비밀번호를 입력하세요"
                            onChange={onChange}
                            value={password}
                            name="password"
                            type="password"
                        />
                        <S.Login_Btn onClick={onClickLogin}>로그인</S.Login_Btn>
                    </S.InputWrapper>
                </S.LoginWrapper>
            ) : (
                <S.LoginWrapper>
                    <S.MyImage>
                        <S.Image src="https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531_960_720.jpg" />
                    </S.MyImage>
                    <S.TopContent>Sign in</S.TopContent>
                    <S.InputWrapper>
                        <S.Login_Id placeholder="아이드를 입력하세요" />
                        <S.Login_password placeholder="비밀번호를 입력하세요" />
                        <S.Login_Btn>로그인</S.Login_Btn>
                    </S.InputWrapper>
                </S.LoginWrapper>
            )}
        </>
    );
};
export default LoginPage;
