// let Ags_manager = {};
class AgsManager {
    constructor(item){
        this.item = item;
    }
    
apply(){

}

get_ticker(fun,item){
  let tick_obj = {};
  const tick = new PIXI.Ticker
    tick.add((delta) => fun(item,delta))
    tick.start();
    tick_obj.destroy = () => tick_obj.tick.destroy(); 
    tick_obj.tick = tick;
    return tick_obj;
}
}// class ends





export default AgsManager;