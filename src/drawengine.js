// import PIXI from './00pixi.js';
// import AgsManager from "./agsmanager.js";
// export {AgsManager}


class DrawEngine {
constructor(width=800,height=600){
    this.app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);
   return true;
}
 get_app(width=800,height=600){
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);
   return app;
}
 get_sprite(app,path="./assets/branch.png"){
    let sprite = PIXI.Sprite.from(path);
 app.stage.addChild(sprite);
    return sprite;
}

 sprite_swing_horizontal(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
 sprite_swing_vertical(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
 sprite_swing_diagonal(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
   sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
 rectangle(app,x=0,y=0,width=500,height=75,color=0xAA33BB){
var rectangle = new PIXI.Graphics();
rectangle.beginFill(color); //yellow 0xFFFF00
// rectangle.lineStyle(5, 0xFF0000); //red
// rectangle.endFill();
rectangle.drawRect(x, y, width, height);
app.stage.addChild(rectangle);
return rectangle;
}

 text(app,txt="random text" ){
let text = new PIXI.Text(txt);
text.anchor.set(0.5);
text.x = app.view.width  / 2;
text.y = app.view.height / 2;
app.stage.addChild(text);
return text;
}

}