import React, { useState } from "react";
import { Route } from "react-router-dom";
import intro from "./components/intro";
import contact from "./components/Contact";

import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return(
    <Appcomponent>
        <div>
          <Header />
        </div>

        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/intro" component={intro}/>
          <Route exact path="/contact" component={contact}/>
        </div>

        <div>
          <Footer />
        </div>
    </Appcomponent>
  );
}

export default App;
