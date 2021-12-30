let app = get_app();

let yellow  = rectangle(app,-490,25,500,75,0xFFFF00);
let meganta = rectangle(app,-490,120,500,75);
let red     = rectangle(app,-490,225,500,75,0xFF0000);
console.log(yellow);
text(app);

function fly_in (item){
      
    if (item.y   > 200) {
        destroy_ticker();
    }
    if (item.x   > 500) {
        item.y += 3;
    }

    if (item.x < 500) {
        item.x += 3;
    }
}
// let fun = fly_in;
let tick_obj = get_ticker(fly_in,yellow);

function destroy_ticker(){
    tick_obj.destroy();
  }
// app.ticker.add(delta => tick(app,yellow,delta));
// app.ticker.add(delta => tick(app,red,delta));
// app.ticker.add(delta => tick(app,meganta,delta));
