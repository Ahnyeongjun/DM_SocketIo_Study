import styled from 'styled-components';

export const LoginWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    height: calc(100vh - 10px);
    flex-direction: column;
    align-items: center;
`;

export const TopContent = styled.div`
    font-size: 2rem;
    font-weight: 200;
    padding-top: 30px;
    padding-bottom: 30px;
    height: auto;
`;
export const Login_Id = styled.input`
    line-height: 40px;
    width: 400px;
    :focus {
        border: rgb(28, 27, 55) solid 1px;
    }
`;

export const Login_password = styled.input`
    margin-top: 20px;
    line-height: 40px;
    width: 400px;
`;
export const InputWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 200px;
    background: rgb(240, 240, 240);
    align-items: center;
`;
export const Image = styled.img`
    margin-top: 2rem;
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 100%;
`;
export const MyImage = styled.div`
    width: 72px;
    height: calc(72px + 2rem);
    margin: 12px;
`;
export const Login_Btn = styled.button`
    margin-top: 30px;
    width: 400px;
    line-height: 40px;
`;
