import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AnimateLetter extends Component{
static propTypes = {
    text : PropTypes.string.isRequired,
    delayTime : PropTypes.number.isRequired
  }
constructor(props){
  super (props);
  this.defaultProps = {
    text: '',
    delayTime : 0
  }


  super(props);
  this.lengthString = 0;
  this.counter = 0;
  this.state = {
    animatedText: ''
  }
}

changeState(){
  if (this.counter > this.lengthString){
    return;
  }
  let subText = this.sliceText(this.counter);
  this.setState({animatedText:subText})
  this.counter++;
  window.requestAnimationFrame(()=>{this.changeState()})
}

componentWillMount(){
this.countLetter();
if (!this.isDelaytime()){
  this.changeState()
}
else if (this.isDelaytime()){
  window.setTimeout(()=>{this.changeState()}, this.props.delayTime, true);
}
}

sliceText(index){
  return this.props.text.substring(0,index);
}

countLetter(){
  this.lengthString = this.props.text.length;
}

isDelaytime(){
  console.log(typeof this.props.delayTime);
  return this.props.delayTime  === 0 || this.props.delayTime > 0;
}

render(){
  return(
    <p>{this.state.animatedText}</p>
  );
}

}

export default AnimateLetter;
