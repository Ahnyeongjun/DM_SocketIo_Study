import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { socket } from '../main/MainPage';
import Item from './Item';
import * as S from './style';

socket.auth = { username: `${localStorage.getItem('username')}` };

const MainPage = ({ match }) => {
    const { room } = match.params;

    const [socketMessage, setSocketMessage] = useState(['3d342699-8eda-49a9-baec-410a4eef0111', '3d342699-8eda-49a9-baec-410a4eef0111']);
    const [message, setMessage] = useState('');
    useMemo(async () => {
        socket.emit('joinRoom', room);

        socket.on('chat_message', (msg) => {
            setSocketMessage((prev) => [...prev, `${msg}`]);
        });
        try {
            const res: any = await axios.get(`http://localhost:3000/api/room/${room}`);
            res.data.room.forEach((e: any) => {
                setSocketMessage((prev) => [...prev, `${e.msg}`]);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const onUsernameSelection = () => {
        socket.emit('chat_message2', socket.id, room, 'Sssssssss', message);
    };

    const onChangeMessage = (e: any) => {
        const { value } = e.target;
        setMessage(value);
    };

    let a: number = 0;

    return (
        <>
            <S.Input1 value={message} onChange={onChangeMessage} placeholder={'message'}></S.Input1>
            <S.Btn1 onClick={onUsernameSelection}>채팅 보내기</S.Btn1>

            <S.Btn2>
                {socketMessage.map((e) => (
                    <Item key={a++} num={e}></Item>
                ))}
            </S.Btn2>
        </>
    );
};
export default MainPage;
