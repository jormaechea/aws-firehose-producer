'use strict';

const assert = require('assert').strict;

module.exports.validateOptions = ({
	deliveryStreamName,
	dataGenerator,
	recordsToInsert
}) => {

	assert(deliveryStreamName, 'deliveryStreamName option is required');
	assert.equal(typeof deliveryStreamName, 'string', 'deliveryStreamName must be a string');
	assert(deliveryStreamName.trim(), 'deliveryStreamName option must not be empty');

	assert(dataGenerator, 'dataGenerator option is required')
	assert.equal(typeof dataGenerator, 'function', 'dataGenerator must be a function');

	if(typeof recordsToInsert !== 'undefined') {
		assert.equal(typeof recordsToInsert, 'number', 'recordsToInsert must be a number');
		assert.equal(recordsToInsert, Number.parseInt(recordsToInsert), 'recordsToInsert must be a positive integer');
		assert(recordsToInsert >= 1, 'recordsToInsert must be a positive integer');
	}
}