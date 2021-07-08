import React, { useState } from "react";
import { Route } from "react-router-dom";
import Dog from "./components/Dog";
import Home from "./components/Home";
import Cat from "./components/Cat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
  <AppComponent>
    <div>
      <Header />
    </div>
  
   <div>
     <Route exact path="/" component={Home} /> {/* exact : 정확히 그 페이지만 띄우는역할 */}
     
     <Route exact path="/dog" component={Dog}/>
     <Route exact path="/cat" component={Cat}/>

    </div>
    <div>
      <Footer />
    </div>
   </AppComponent>

  );
}

export default App;


const AppComponent = styled.div`
  height: 100vh;
  text-align: center;
  display : flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: space-between;
`;