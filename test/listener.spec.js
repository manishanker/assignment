//This file is used for testing the listener functions
var sinon = require('sinon');
var emitter = require(`${SRC}/emitter`);
var eventEmitter = emitter.eventEmitter;
var assert = require('assert');

var listener = require(`${SRC}/listener`);

describe("check listener functions", function(){

	var sandbox;
	beforeEach(function () {
		    sandbox = sinon.sandbox.create();
		});

	afterEach(function () {
		    sandbox.restore();
		});
	
	it('calls the original function eventEmitter', function () {
	    var eventSpy = sandbox.spy();
	    eventEmitter.on('notify', eventSpy);
	    eventEmitter.emit('notify');
	    assert(eventSpy.called);
	});

	it('should print that Temperature is out of range', function(){

		var callback = sandbox.stub();
		var obj = {"temp": 15, "beerStr": "Beer1"};
		callback.returns(obj);

		var funcReturn = listener.myEventHandler(15, "Beer1");
		var callbackReturn = callback();

		assert.equal ( callbackReturn["temp"], funcReturn["temp"] );
		assert.equal ( callbackReturn["beerStr"], funcReturn["beerStr"] );
		
	});

	it('should print that Temperature is in of range', function(){

		var callback = sandbox.stub();
		var obj = {"temp": 5, "beerStr": "Beer1"};
		callback.returns(obj);

		var funcReturn = listener.showCurrentTemperature(5, "Beer1");
		var callbackReturn = callback();

		assert.equal ( callbackReturn["temp"], funcReturn["temp"] );
		assert.equal ( callbackReturn["beerStr"], funcReturn["beerStr"] );
		

	});

	it('should print there was some error with the new data added in beers', function(){

		var callback = sandbox.stub();
		var obj = {"beerStr": "Beer1"};
		callback.returns(obj);

		var funcReturn = listener.errorEventHandler("Beer1");
		var callbackReturn = callback();

		assert.equal ( callbackReturn["beerStr"], funcReturn["beerStr"] );

	});

});