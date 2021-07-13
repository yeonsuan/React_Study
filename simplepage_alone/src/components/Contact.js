import React from 'react';
import Email from './Email';
import Kakao from './Kakao';


function Contact() {
    return (
        <div> 
            {/* 밑에서 설정하면 이걸로 감싸주기 기억하자 */}
            <Email/>
            <Kakao/>
        </div>
    )
}

export default Contact



