import React, { Component } from 'react';
import TOC from "./component/TOC";
// TOC를 components파일에 따로 빼두고 import로 써둠
import Content  from "./component/Content";
import Subject from "./component/Subject";
import './App.css';


class App extends Component { 
  constructor(props){
    super(props);
    this.state ={
      mode:'read',
      subject:{title:'WEB',sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello,React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'}
      ]
    }
  }
  render(){
    console.log('app render');
    let _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode === 'read'){
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;
    }
    return(
    <div className="App">
      {/* <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
      </Subject>    */}
       <header> 
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // this.state.mode='welcome';
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.title}
          </header>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;