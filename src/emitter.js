//This file consist of event emitter functions

var events = require('events');
var beers = require('./beers');
var config = require('./config');
var counter = config.counter;

var eventEmitter = new events.EventEmitter();

function emitter(){ 
	var beerArr= Object.keys(beers);
	counter = counter -1 ;
	for(var i=0;i<beerArr.length;i++){

		var tempBeer = Math.floor(( Math.random() * config.offset ) + config.delta);

		if (beers && beers[beerArr[i]] && (beers[beerArr[i]].length==2) && 
			(!isNaN(beers[beerArr[i]][0])) 	&& (!isNaN(beers[beerArr[i]][1])) &&
			 ((beers[beerArr[i]][0]) <= (beers[beerArr[i]][1]) ) ){
			
			if (tempBeer > beers[beerArr[i]][1] || tempBeer < beers[beerArr[i]][0]){
				eventEmitter.emit('notify', tempBeer, beerArr[i]);
			}	
			else{
				eventEmitter.emit('fine', tempBeer, beerArr[i]);
			}
		}
		else {
			eventEmitter.emit('error', beerArr[i]);
		}
	}
	var timer = setTimeout(emitter, config.timeOutDelta);
	if (counter == 0){
		clearTimeout(timer);
	}
}

var exp ={
	"eventEmitter": eventEmitter,
	"emitterFuction": emitter	
};

module.exports = exp;