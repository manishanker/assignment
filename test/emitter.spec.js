//This file is for testing the main emitter function
var sinon = require('sinon');
var emitter = require(`${SRC}/emitter`);
var assert = require('assert');

describe("check event emitter functions", function(){

	var sandbox;
	beforeEach(function () {
		    sandbox = sinon.sandbox.create();
		});

	afterEach(function () {
		    sandbox.restore();
		});
	
	it('calls the main emitter function', function () {
	    var spy = sandbox.spy();
	    spy(emitter.emitterFuction);
	    assert(spy.called);
	});
});