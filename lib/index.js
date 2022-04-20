'use strict';

const { putRecord } = require('./firehose');
const { validateOptions } = require('./options-validator');

/**
 * @typedef {object} Options
 * @property {string} deliveryStreamName
 * @property {function} dataGenerator
 * @property {number} [recordsToInsert]
 */

/**
 * @param {Options} options
 */
module.exports = async (options = {}) => {

	validateOptions(options);

	const {
		deliveryStreamName,
		dataGenerator,
		recordsToInsert = 1
	} = options;

	try {

		await Array(recordsToInsert).fill(0).map(async () => {

			const data = await putRecord(deliveryStreamName, dataGenerator());

			console.log(data);

		});

	} catch (error) {
		console.error(error);
	}
};
