var sinon = require('sinon');
//var listener = require(`${SRC}/listener`);
var emitter = require(`${SRC}/emitter`);
var eventEmitter = emitter.eventEmitter;
var assert = require('assert');

describe("listener function call", function(){
	//var sandbox = sinon.sandbox.create();

	it('calls the original function', function () {
	    var eventSpy = sinon.spy();
	    eventEmitter.on('notify', eventSpy);
	    eventEmitter.emit('notify');
	    assert(eventSpy.called);
	});

});