var events = require('events');
var beers = require('./beers');
var eventEmitter = new events.EventEmitter();

//Fire the 'scream' event:
//eventEmitter.emit('scream');

function emitter(){ 
	var beerArr= Object.keys(beers);
	for(var i=0;i<beerArr.length;i++){
		var tempBeer = Math.floor(( Math.random() * 10 ) + 5);
		if (tempBeer > beers[beerArr[i]][1] || tempBeer < beers[beerArr[i]][0]){
			eventEmitter.emit('scream', tempBeer, beerArr[i]);
		}	
		else{
			eventEmitter.emit('fine', tempBeer, beerArr[i]);
		}
	}
	setTimeout(emitter, 1000);
}

var exp ={
	"ev": eventEmitter,
	"em": emitter	
}

module.exports= exp