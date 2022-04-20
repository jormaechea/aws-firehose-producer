'use strict';

const { FirehoseClient, PutRecordCommand } = require("@aws-sdk/client-firehose");

const firehoseClient = new FirehoseClient();

module.exports.putRecord = (deliveryStreamName, recordData) => {

	const putRecord = new PutRecordCommand({
		DeliveryStreamName: deliveryStreamName,
		Record: {
			Data: Buffer.from(JSON.stringify(recordData))
		}
	});

	return firehoseClient.send(putRecord);
};
