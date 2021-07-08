//rfce 치고 엔터!

import React from 'react'
import styled from "styled-components";

function Cat() {
    return (
        <div>
            <Title>HOMEPAGE 홈페이지</Title>
            <FirstContent>이것들은 컨텐츠입니다. 안녕하세요 반갑습니다.</FirstContent>
            <div>이것들은 컨텐츠입니다. 안녕하세요 반갑습니다.</div>
            <div>이것들은 컨텐츠입니다. 안녕하세요 반갑습니다.</div>
            <div>이것들은 컨텐츠입니다. 안녕하세요 반갑습니다.</div>
            <div>이것들은 컨텐츠입니다. 안녕하세요 반갑습니다.</div>
        </div>
    )
}

export default Cat

const Title = styled.h1`
    color : gold;
`;

const FirstContent = styled.div`
    color : blue;
`;