import React, { Component } from 'react';


class Subject extends Component {
    render() {
      console.log('Subject render');
      return (
        <header>  
          {/* href="/"가 링크 거는방법 */}
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); //링크를 클릭했을 때 페이지가 바뀌는걸 막는 용도
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>          
          {this.props.sub}
        </header>
      );
    }
  }
  

export default Subject;