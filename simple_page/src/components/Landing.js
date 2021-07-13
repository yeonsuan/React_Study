import React, {useEffect } from 'react'

function Landing(props) {
    
    const toContactPage = () => {
        props.history.push("/contact");
    }

    const goBack = () => {
        props.history.goBack();
    } //기억하기

    return (
    <div>
        <button><a href="./Intro">인트로페이지로이동</a></button>
        <button onClick={toContactPage}>컨텍트페이지로이동</button>
        <button onClick={goBack}>뒤로가기</button>
    </div>
    )
}

export default Landing
