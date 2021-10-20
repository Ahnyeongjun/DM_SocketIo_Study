import styled from "styled-components";
import * as S from './style';

export const Input1 = styled.input`
height: 100px;
width: 100px;
`;
export const Btn1 = styled.div`
width: 100px;
height: 100px;
background: black;
:nth-child(2n){
    background: gray;
}
`;
export const Btn2 = styled.div`
width:500px;
display: flex;
flex-direction: column;
height:500px;`;

export const text = styled.div`
width:auto;
height: auto;
`;
export const text2 = styled.div`
width:auto;
height: auto;
background: black;
color:white;
`;