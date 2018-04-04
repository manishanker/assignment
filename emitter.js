var events = require('events');
var beers = require('./beers');
var eventEmitter = new events.EventEmitter();

//Fire the 'scream' event:
//eventEmitter.emit('scream');

function emitter(){ 
	var beerArr= Object.keys(beers);
	for(var i=0;i<beerArr.length;i++){

		var tempBeer = Math.floor(( Math.random() * 10 ) + 5);

		if (beers && beers[beerArr[i]] && (beers[beerArr[i]].length==2) && (!isNaN(beers[beerArr[i]][0])) && (!isNaN(beers[beerArr[i]][1])) ){
			if (tempBeer > beers[beerArr[i]][1] || tempBeer < beers[beerArr[i]][0]){
				eventEmitter.emit('scream', tempBeer, beerArr[i]);
			}	
			else{
				eventEmitter.emit('fine', tempBeer, beerArr[i]);
			}
		}
		else {
			eventEmitter.emit('error', beerArr[i]);
		}
	}
	setTimeout(emitter, 1000);
}

var exp ={
	"eventEmitter": eventEmitter,
	"emitterFuction": emitter	
}
module.exports= exp