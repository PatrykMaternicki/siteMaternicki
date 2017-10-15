import React, { Component } from 'react';
import WelcomeContainer from './Containers/welcomeContainer.js';
import './CSS/style.min.css';
import circle from './Images/circle-m.png'
import IconStorage from './imageStorage.js';
import Icon from './Containers/Components/Icon.js';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      opacityValue: '0',
      marginValue: '23%'
    }
  }

  componentWillMount(){
    window.setTimeout(()=>
    {
      this.changeDisplay();
      this.changeMargin();
    }, 6200);

  }


  changeMargin(){
    this.changeOpacity();
    let marginValue = this.cutValue();
    if (this.isMarginValueIsEqualZero(marginValue)){
      return;
    }
    marginValue--;
    let joinString = this.joinString(marginValue);
    this.setState({marginValue: joinString})
    window.requestAnimationFrame(()=>{this.changeMargin()});
  }

  changeOpacity(){
    let newOpacityValue = this.parseToFloat();
    newOpacityValue = newOpacityValue + 0.05;
    this.setState({opacityValue:newOpacityValue});
  }

  parseToFloat(){
    return Number.parseFloat(this.state.opacityValue);
  }
  isMarginValueIsEqualZero(value){
    return value == 0;
  }
  joinString(value){
    return value + '%';
  }
  cutValue(){
    let splittedArray = this.state.marginValue.split('%');
    return splittedArray[0];
  }

  changeDisplay(){
    this.setState({opacityValue:'0.1'});
  }

  render() {
    let builtComponent = [];
    let iterator = 0;
    for ( const SrcObject of IconStorage ){
      builtComponent.push(<Icon IconSrc={SrcObject.src} width="32px" height="32px" alt="" key={iterator}/>);
      iterator++;
    }
    return (
      <section className="app-text">
      <WelcomeContainer circleSrc={circle} />
      <div style={{opacity:this.state.opacityValue, marginRight:this.state.marginValue}}className="app-text-imageContainer">
      {builtComponent}
      </div>
      </section>

    );
  }
}

export default App;
