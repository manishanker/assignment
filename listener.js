var events = require('events');
var emitter = require('./emitter');
var eventEmitter = emitter.eventEmitter;

//Create an event handler when the temperature of beer is out of range:
myEventHandler = function (temp, beerStr) {
  console.log('Temperature out of range and is', temp, 'for', beerStr);
}

//Create an event handler to show the current tempertaure:
showCurrentTemperature = function (temp,beerStr) {
  console.log('Temperature is in range and is', temp, 'for ', beerStr);
}

//Create an event handler when the temperature of beer is out of range:
errorEventHandler = function (beerStr) {
  console.log('Error for', beerStr);
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('fine', showCurrentTemperature);
eventEmitter.on('error', errorEventHandler);

emitter.emitterFuction();