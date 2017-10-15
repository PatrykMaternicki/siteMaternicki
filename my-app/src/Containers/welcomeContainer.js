import React, { Component } from 'react';
import Button from './Components/Button.js';
class WelcomeContainer extends Component{
constructor(props){
  super(props)
  this.animatedObject ={
    maternickiText : {
       textAnimate : 'aternicki',
       counter: 0,
       keyTo: 'text1'
     },
     meText : {
        textAnimate : 'me',
        counter: 0,
        keyTo: 'text2'
      },
    speclazizationText : {
      textAnimate: 'JavaScript / FrontEnd Developer',
      counter: 0,
      keyTo: 'text3'

    },
  }
  this.state = {
    text1: '',
    text2 : '',
    text3: '',
  };
}


animate(object){
    if (object.counter > object.textAnimate.length){
      return;
    }
    let subText = this.sliceText(object.textAnimate , object.counter);
    object.counter++;
    console.log(object.counter);
    this.changeState(subText , object.keyTo)
    window.setTimeout(()=>{this.animate(object)}, 100);
}

changeState(text,key){
  switch(key){
    case 'text1':
    {
      this.setState({text1:text});
     break;
   }
   case 'text2':
   {
     this.setState({text2:text});
    break;
  }
    case 'text3':{
      this.setState({text3:text}) ;
      break;
    }
    default:{
      break;
    }
  }
}

sliceText(text , index){
  return text.substring(0,index);
}

componentWillMount(){
  window.setTimeout(()=>{
    this.animate(this.animatedObject.maternickiText)} , 1000);
  window.setTimeout(()=>{
    this.animate(this.animatedObject.meText)} , 2100);
  window.setTimeout(()=>{
    this.animate(this.animatedObject.speclazizationText)} , 2400);
}



render (){
  return (
    <div>
    <Button classNames='app-button'/>
    <img className="app-text--circle" src={this.props.circleSrc} width='60px' height='60px' alt=''/>
    {this.state.text1}
    <span  className="app-text--anotherFont">{this.state.text2}</span>
    <p className="app-text-specialization">{this.state.text3}</p>

    </div>

  );
}


}

export default WelcomeContainer;
