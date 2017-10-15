
class storeState {
  constructor(){
    this.store = new Map();
    this.mapItter;

  }

  addStateToStore(arrayObject){
    arrayObject.forEach((object) => {
    object.actualState = 'asd';
    this.setStateToStore(object);
  });
  this.mapItter = this.store.keys();
  }

 getAllKeys(){
  let keys = [];
   for (var v of this.mapItter){
     keys.push(v);
   }
   return keys;
 }

  setStateToStore(object){
    this.store.set(object.key,object.value);
  }
  findObjectUsingKey(key){
    return this.store.get(key);
  }
}

export default storeState;
