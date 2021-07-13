import React from 'react';
import styled from "styled-components";

function Email() {
    return (
        <Emailstyle>
            <h1>Email</h1>
            <p>
            <input type="text" placeholder="전달 받을 메일을 입력해주세요."/>
            </p>
            <textarea/>
        </Emailstyle>
    )
}

export default Email

const Emailstyle = styled.div`
    background-color: #FFDC00;
    height: 180px;
    width: 200px;
`
