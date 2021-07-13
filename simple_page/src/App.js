import React from 'react'
import { Route } from 'react-router-dom';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Header/>
    <div>
        <Route exact path="/" component={Landing} />
        <Route path="/Intro" component={Intro} />
        <Route path="/Contact" component={Contact} />
    </div>
       <Footer />
    </div>
  )
}

export default App
