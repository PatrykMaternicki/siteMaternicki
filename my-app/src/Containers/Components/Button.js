import React, { Component } from 'react';
import Data from '../../Images/next.png';
import Icon from './Icon.js';
class Button extends Component {


render(){
  return(
    <button className={this.props.classNames} >
    <Icon width='64px' height='64px' alt='link to next site' IconSrc={Data} />
    </button>
  );
}
}

export default Button;
