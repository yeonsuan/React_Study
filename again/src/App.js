import React, { Component } from 'react';
import TOC from "./components/TOC" 
// TOC를 components파일에 따로 빼두고 import로 써둠
import Content  from "./components/Content"
import './App.css';


class App extends Component { 
  constructor(props){
    super(props);
    this.state ={
      Subject:{title:'WEB',sub:'World Wide Web!'},
      contents:[
        {id:1 ,title:'HTML', desc:'HTML is ...'},
        {id:2 ,title:'CSS', desc:'CSS is ...'},
        {id:3 ,title:'JavaScript', desc:'Javascript is ...'}
      ]
    }
  }
  render(){
    return (
        <div className="App"> 
          <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject>
          <Subject title="React" sub="For UI"></Subject>
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        </div>
    );
  }
}

export default App;