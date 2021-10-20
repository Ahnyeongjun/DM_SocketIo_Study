import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import Item from './Item';
import * as S from './style';
export const socket = io('http://localhost:3000');
const username = localStorage.getItem('username');
socket.auth = { username: `${username}` };
socket.connect();

const MainPage = () => {
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState(['']);

    useMemo(async () => {
        const res: any = await axios.get(`http://localhost:3000/api/room/all/${username}`);
        console.log(username);
        setRooms(rooms.concat(res.data.room));
    }, []);
    const onUsernameSelection3 = () => {
        axios.post('http://localhost:3000/api/room/', { name: room, creater: `${localStorage.getItem('username')}` });
    };

    const onChangeJoinRoom = (e: any) => {
        const { value } = e.target;
        setRoom(value);
    };

    let a: number = 0;

    return (
        <>
            <S.Input1 value={room} onChange={onChangeJoinRoom} placeholder={'room'}></S.Input1>

            <S.Btn1 onClick={onUsernameSelection3}>룸 만들기</S.Btn1>

            <S.Btn2>
                {rooms.map((e: any) => (
                    <S.Btn1>
                        <a href={`/chat/${e.uid}`}>{e.name} 룸 들어가기</a>
                    </S.Btn1>
                ))}
            </S.Btn2>
        </>
    );
};
export default MainPage;
