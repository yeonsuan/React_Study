import React, { Component } from 'react';

class TOC extends Component{
    render(){
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"./Content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
        // 여러개의 목록을 자동으로 생성하기위한 것 key
      }
      return(
        <nav>
          <ul>
             {lists}
          </ul>
      </nav>   
      );
    }
  }

  export default TOC;