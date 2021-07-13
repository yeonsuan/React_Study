import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'; //라우터 돔 가져오는거 잊지말기
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Contact from './components/Contact';
import styled from "styled-components";



function App() {
  return (
    <Appstyle>
      <div>
      <Header />
      <div>

        <Route path="/" component={Landing} />
        <Route path="/Intro" component={Intro} />
        <Route path="/Contact" component={Contact} />

      </div>
      <Footer />
      </div>
    </Appstyle>

  )
}

export default App

let Appstyle = styled.div`
width :100vw;
    height: 100vh;
    display:flex;
    justify-content: center; /*좌우의 가운데 정렬*/
    align-items:center;
`
