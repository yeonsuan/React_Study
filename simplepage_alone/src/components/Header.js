import React from 'react'

function Header(props) {

const toLanding = () => {
    props.history.push("http://localhost:3000/")
}


    return (
        <div>
            <h1 onClick={toLanding}>SUAN PAGE</h1>
        </div>
    )
}

export default Header
