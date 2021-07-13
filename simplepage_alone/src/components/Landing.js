import React from 'react'

function Landing(props) {
    
const toIntro = () => {
    props.history.push("./Intro")
}

const toContact = () => {
    props.history.push("./Contact")
}

const goBack = () => { //뒤로가기 버튼 기억하기
    props.history.goBack(); 
}

    return (
        <div>
            <button onClick={toIntro}>Intro</button>
            <button onClick={toContact}>Contact</button>
            <button onClick={goBack}>goBack</button>
        </div>
    )
}

export default Landing
