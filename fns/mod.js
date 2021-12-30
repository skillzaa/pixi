

function get_app(width=800,height=600){
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);
   return app;
}
function get_sprite(app,path="./assets/branch.png"){
    let sprite = PIXI.Sprite.from(path);
 app.stage.addChild(sprite);
    return sprite;
}

function sprite_swing_horizontal(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
function sprite_swing_vertical(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
function sprite_swing_diagonal(sprite){
let elapsed = 0.0;
 app.ticker.add((delta) => {
   elapsed += delta;
   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
   sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
 });
}
function rectangle(app,x=0,y=0,width=500,height=75,color=0xAA33BB){

var rectangle = new PIXI.Graphics();
rectangle.beginFill(color); //yellow 0xFFFF00
// rectangle.lineStyle(5, 0xFF0000); //red
// rectangle.endFill();
rectangle.drawRect(x, y, width, height);
app.stage.addChild(rectangle);
return rectangle;
}

function text(app,txt="random text" ){

let text = new PIXI.Text(txt);
text.anchor.set(0.5);
text.x = app.view.width  / 2;
text.y = app.view.height / 2;
app.stage.addChild(text);
return text;
}
function get_ticker(fun,item){
  let tick_obj = {};
  const tick = new PIXI.Ticker
    tick.add((delta) => fun(item,delta))
    tick.start();
    tick_obj.destroy = () => tick_obj.tick.destroy(); 
    tick_obj.tick = tick;
    return tick_obj;
}
