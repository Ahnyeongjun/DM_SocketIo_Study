import styled from "styled-components";
import * as S from './style';

export const Chat = styled.div`
width:1200px;
height:calc(100vh - 80px);
margin: 0 auto;
background: #C4C4C4;
`;

export const Video = styled.div`
width: 894px;
height: 540px;
background: gray;
`;

export const Header = styled.header`
height:80px;background:gray;
width: 100vw;`

export const ContentWrapper = styled.div`
padding-top: 35px;
height:calc(100% - 35px);
width:100%;
display:flex;
`

export const leftWrapper = styled.div`
width: 894px;
height:auto;
`

export const RightWrapper = styled.div`
margin-left: 24px;
width: 282px;
height:auto;
`;
export const TopWrapper = styled.div`
height:100px;
width: 100%;
background: gray;
margin-bottom: 35px;
`;

export const Chatting = styled.div`
    height: 810px;
    width:100%;
    background: gray;
`;

export const ChatInput = styled.textarea`
display: block;
outline: none;
border: none;
padding:5px 0;
height:72px;
width:240px;
background: white;
resize: none;
margin: 0 auto;
`;

export const ChatSendBtn = styled.div`
width: 50px;
background: white;
text-align: center;
height: 25px;
line-height: 25px;
:hover{
    background: #C44444;
}
`;
export const ChatSendBtnWrapper = styled.div`
display: flex;
flex-direction: row-reverse;
height: 25px;
width: 250px;
margin:10px auto;
`;
export const ChatWrapper = styled.div`
height: 150px;
width:100%;
`;
export const ChatInputWrapper = styled.div`
width:250px;
margin: 0 auto;
background: white;
`;
export const ChatHeader = styled.div`
height:45px;
background: black;
width: auto;;
`;
export const ChatType = styled.div`
height: 20px;
margin-bottom: 10px;
width:auto;
margin-left:16px;
font-size: 18px;
color:white;
`;
export const ChatList = styled.div`
width:100%;
overflow-y:scroll;
height:604px;
margin-bottom:10px;
::-webkit-scrollbar {
        width: 6px;
        display: unset;
}
::-webkit-scrollbar-track {
  background: gray;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-right: 2px solid gray;
  background: white;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

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
padding: 5px 0;
width:270px;
margin: 0 auto;
height: auto;
`;
export const text2 = styled.div`
width:270px;
padding: 5px 0;
height: auto;
margin: 0 auto;
background: black;
color:white;
`;