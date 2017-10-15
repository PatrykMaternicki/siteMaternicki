import StateStore from './stateStore.js';
class animateLetter {





constructor (objectArray){
  this.stateStore = new StateStore();
  this.setState(objectArray);
  this.stateObject = {};
}

setState(arrayObject){
this.stateStore.addStateToStore(arrayObject);
}

constructState(){
  let key = this.stateStore.getAllKeys();
  key.forEach((element)=>{
    Object.defineProperty(this.stateObject, element, {value : '',
                               writable : true,
                               enumerable : true,
                               configurable : true});
  });
  return this.stateObject;
}
startAnimateOn(nameProperty){
  console.log(this.stateObject[nameProperty]);
  for (var i in this.stateObject){
    if (i.value === nameProperty){
      console.log('HURRA');
    }
  }
}

getState(key){
 console.log(this.stateStore);
}
}

export default animateLetter
