import React, { Component } from 'react';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Subject from "./component/Subject";
import './App.css';

class App extends Component() {
  constructor(props){
    super(props); //여기까지가 초기화
    this.state={
      mode:'read',
      subject:{title:'WEB',sub:'World Wide Web!'},
      welcome:{title:'Welcome',sub:'Hello,React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.
    }
  }
  
  return(
    <div className="App">
     <Subject></Subject>
      <header></header>
     <TOC></TOC>
     <Content></Content>
    </div>
  );
}

export default App;
