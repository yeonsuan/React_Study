import React, { Component } from 'react';


class Subject extends Component {
    render() {
      return (
        <header>  
          {/* href="/"가 링크 거는방법 */}
          <h1><a href="/">{this.props.title}</a></h1>          
          {this.props.sub}
        </header>
      );
    }
  }
  

export default Subject;