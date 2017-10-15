import React, { Component } from 'react';

class Icon extends Component{

render(){
  return(
    <img src={this.props.IconSrc}
    width={this.props.width}
    height={this.props.height}
    alt={this.props.alt}
    />
  );
}
}

export default Icon;
