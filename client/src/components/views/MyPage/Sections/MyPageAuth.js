import React from 'react';
import { useSelector } from 'react-redux';

const MyPageAuth = () => {
    const user = useSelector((state) => state.user.userData);
    return <div>MyPageAuth 부분</div>;
};

export default MyPageAuth;
