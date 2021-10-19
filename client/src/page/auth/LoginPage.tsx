import React, { useMemo, useState } from 'react';
import Item from './Item';
const LoginPage = () => {
    const [numbers, setNumbers] = useState([' prev.length + 1', ' prev.length + 1', ' prev.length + 1']);
    // 함수 생성
    const addNumber = () => {
        setNumbers((prev) => [...prev, ' prev.length + 1 ']);
    };
    let a: number = 0;
    return (
        <div>
            {numbers.map((num) => (
                <Item key={a++} num={num}></Item>
            ))}
            <div onClick={addNumber}>Click</div> // 함수 실행
        </div>
    );
};
export default LoginPage;
