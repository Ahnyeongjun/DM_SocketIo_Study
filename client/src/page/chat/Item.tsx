import React from 'react';
import * as S from './style';
const Item = ({ msg, name }) => {
    console.log(msg);
    return (
        <>
            {name == localStorage.getItem('username') ? (
                <S.text2>
                    name: {name} msg: {msg}
                </S.text2>
            ) : (
                <S.text>
                    name: {name} msg: {msg}
                </S.text>
            )}
        </>
    );
};

export default React.memo(Item);
