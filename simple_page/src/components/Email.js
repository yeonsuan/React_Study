import React from 'react'

function Email() {
    return (
        <div>
            Email
            <input type="text" placeholder="수신받을 이메일을 입력해주세요."/> 
            <textarea />
            {/* 인풋은 안늘어나고 textarea는 늘어나는거! */}
        </div>
    )
}

export default Email
