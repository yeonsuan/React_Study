import React from 'react';
import styled from "styled-components";

function Kakao() {
    return (
        <ContactComponent>
            <div>
                <h1>Kakao</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/%EC%B5%9C%EA%B4%91%EB%AA%A8_%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1_QR_%EC%BD%94%EB%93%9C_Choe_Kwangmo_KakaoTalk_QR_code_2017-09-01_21.21.42.png" /> {/* 수안.. image가 아니라 img.. */}
            </div>
        </ContactComponent> 
    )
}

export default Kakao

const ContactComponent = styled.div`
    background-color: #FFDC00;
    height: 320px;
    width: 200px;
    /* display:flex;
    justify-content: center; 좌우의 가운데 정렬 */

`