import * as PIXI from 'pixi.js';

export default class AgsManager {
constructor(){}
    
get_ticker(item){
  let tick_obj = {};
  const tick = new PIXI.Ticker
    tick.add((delta) => this.fly_in(item))
    tick.start();
    this.destroy_ticker = () => tick_obj.tick.destroy(); 
    tick_obj.tick = tick;
    return tick_obj;
}
fly_in (item){     
    if (item.y   > 200) {
        this.destroy_ticker();
    }
    if (item.x   > 500) {
        item.y += 3;
    }

    if (item.x < 500) {
        item.x += 3;
    }
}


}// class ends

