//This function is to log the temperature of the beer on console 
// functions are used to subscribe events when beer is in/out of range
var events = require('events');
var emitter = require('./emitter');
var eventEmitter = emitter.eventEmitter;
var config = require('./config');

//Create an event handler when the temperature of beer is out of range:
myEventHandler = function (temp, beerStr) {
  console.log('Temperature out of range. Temperature is', temp, 'for', beerStr);
  return {"temp": temp, "beerStr": beerStr};
};

//Create an event handler to show the current tempertaure:
showCurrentTemperature = function (temp, beerStr) {
  console.log('Temperature is in range. Temperature is', temp, 'for ', beerStr);
  return {"temp": temp, "beerStr": beerStr};
};

//Create an event handler when the temperature of beer is out of range:
errorEventHandler = function (beerStr) {
  console.log('Error. Range should be an array of two integers and first value less than or equal to the second', beerStr);
  return {"beerStr": beerStr};
};

//Assign the event handler to an event:
eventEmitter.on('notify', myEventHandler);
eventEmitter.on('fine', showCurrentTemperature);
eventEmitter.on('error', errorEventHandler);

if (!config.test){
	emitter.emitterFuction();
}

var listener = {
	"myEventHandler" : myEventHandler,
	"showCurrentTemperature" : showCurrentTemperature,
	"errorEventHandler": errorEventHandler
};

module.exports = listener;