import React from 'react';

const Item = ({ num }) => {
    console.log(num);
    return <div>{num}</div>;
};

export default React.memo(Item);
