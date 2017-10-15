// Jenodliniowy komenatarz
import ReactPlugin from '.reactPlugin.js';
class animateLetter {
constructor (text){
  this.text=text;
}

runReactPlugin(){
this.reactPlugin = new ReactPlugin();
return this;
}
setState(state){
  this.eactPlugin.createStates(state);
}


}

export default animateLetter
