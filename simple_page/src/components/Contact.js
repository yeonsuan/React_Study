import React from 'react';
import Email from './Email';
import Kakao from './Kakao';
import styled from "styled-components"

function Contact() {
    return (
        <ContactComponent>
            <Email />
            <Kakao />
        </ContactComponent>
    )
}

export default Contact

const ContactComponent = styled.div`
    background-color: mintcream;
`