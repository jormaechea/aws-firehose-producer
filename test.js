'use strict';

const produce = require('.');
const { numbers, objectId, oneOf } = require('./lib/faker');

/*
 * Define the Firehose Stream Name
 */
const deliveryStreamName = 'kpi-metrics-per-client';

/*
 * Generates data for each record
 */
const dataGenerator = () => ({
	dateCreated: new Date(),
	clientCode: 'fizzmodarg',
	metricName: 'order-fulfillment-status',
	metricData: {
		deliveryDate: new Date(),
		orderId: `${numbers(12)}-01`,
		salesChannelId: objectId(),
		salesChannelName: `sc-${numbers(2)}`,
		sellerId: objectId(),
		sellerName: `sell-${numbers(2)}`,
		locationId: objectId(),
		locationName: `loc-${numbers(2)}`,
		warehouseId: objectId(),
		warehouseName: `wh-${numbers(2)}`,
		status: oneOf(['pending', 'picking', 'picked', 'managing', 'waitingInvoice', 'invoiced', 'inDelivery', 'delivered', 'notDelivered', 'canceled'])
	}
});

produce({
	deliveryStreamName,
	dataGenerator
});
