import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import Item from './Item';
import * as S from './style';
const socket = io('http://localhost:3000');

socket.auth = { username: `${localStorage.getItem('username')}` };
socket.connect();

const MainPage = () => {
    const [socketMessage, setSocketMessage] = useState(['3d342699-8eda-49a9-baec-410a4eef0111', '3d342699-8eda-49a9-baec-410a4eef0111']);
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    useMemo(() => {
        socket.on('chat_message', (msg) => {
            setSocketMessage((prev) => [...prev, `${msg}`]);
        });
    }, []);
    const onUsernameSelection = () => {
        socket.emit('chat_message2', socket.id, room, 'Sssssssss', message);
    };
    const onUsernameSelection2 = () => {
        socket.emit('joinRoom', room);
    };
    const onUsernameSelection3 = () => {
        axios.post('http://localhost:3000/api/room/', { name: room, creater: `${localStorage.getItem('username')}` });
    };

    const onChangeUsername = (e: any) => {
        const { value } = e.target;
        setUsername(value);
    };
    const onChangeJoinRoom = (e: any) => {
        const { value } = e.target;
        setRoom(value);
    };
    const onChangeMessage = (e: any) => {
        const { value } = e.target;
        setMessage(value);
    };

    let a: number = 0;

    return (
        <>
            <S.Input1 value={username} onChange={onChangeUsername} placeholder={'username'}></S.Input1>
            <S.Input1 value={room} onChange={onChangeJoinRoom} placeholder={'room'}></S.Input1>
            <S.Input1 value={message} onChange={onChangeMessage} placeholder={'message'}></S.Input1>
            <S.Btn1 onClick={onUsernameSelection}>채팅 보내기</S.Btn1>
            <S.Btn1 onClick={onUsernameSelection2}>룸 들어가기</S.Btn1>
            <S.Btn1 onClick={onUsernameSelection3}>룸 만들기</S.Btn1>

            <S.Btn2>
                {socketMessage.map((e) => (
                    <Item key={a++} num={e}></Item>
                ))}
            </S.Btn2>
        </>
    );
};
export default MainPage;
