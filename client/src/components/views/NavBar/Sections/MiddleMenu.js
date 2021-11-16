import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const RightMenu = (props) => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <Button sx={{ mr: 1 }} href="/about" color="inherit">
                소개
            </Button>
            <Button sx={{ mr: 1 }} href="/authBoard" color="inherit">
                지키미인증
            </Button>
            <Button sx={{ mr: 1 }} href="/product" color="inherit">
                포인트사용
            </Button>
            {/* <Button sx={{ mr: 1 }} color="inherit">
                    미니게임
                </Button> */}
            <Button sx={{ mr: 1 }} href="/board" color="inherit">
                게시판
            </Button>
        </div>
    );
};

export default withRouter(RightMenu);
