'use strict';

const { datatype } = require('faker');

const objectId = () => datatype.hexaDecimal(24).replace('0x', '').toLowerCase();

const oneOf = options => options[Math.floor(Math.random() * options.length)];

const numbers = length => Array(length).fill(0).map(() => datatype.number() % 10).join('');

module.exports = {
	numbers,
	objectId,
	oneOf
}
