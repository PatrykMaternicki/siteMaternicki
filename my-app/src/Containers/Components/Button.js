import React, { Component } from 'react';
import Data from '../../Images/next.png';
import Icon from './Icon.js';
class Button extends Component {
constructor(props){
  super(props);
  this.state={
    display:'none',
    transform: 'scale(0.1)'
  }
  this.valueScale = 0.1;
}
componentWillMount(){
  window.setTimeout(()=>{
    this.changeDisplay();
  }, 6700);
}

changeDisplay(){
  this.setState({display:'block'})
  this.changeScale();
}

changeScale(){
  if (this.valueScale >= 1){
    return;
  }
  this.valueScale = this.valueScale + 0.1;
  console.log(this.valueScale);
  this.setState({transform:`scale(${this.valueScale})`})
  console.log(this.state.transform);
  window.requestAnimationFrame(()=>{this.changeScale()})
}

render(){
  return(
    <button style={{display:this.state.display,transform:this.state.transform}} className={this.props.classNames} >
    <Icon width='64px' height='64px' alt='link to next site' IconSrc={Data} />
    </button>
  );
}
}

export default Button;
