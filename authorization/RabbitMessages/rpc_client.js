// const amqp = require('amqplib')
// const uuid = require('uuid')
//
// async function publishMessageForProfile (message) {
//     try {
//         const connection = await amqp.connect('amqp:/localhost')
//         const channel = await connection.createChannel()
//
//         let corId = uuid.v4
//         const q = await channel.assertQueue('', {
//             exclusive: true
//         })
//
//         await channel.sendToQueue((process.env.QUEUE_NAME+'_profile'), Buffer.from(message), {
//             correlationId: corId,
//             replyTo: q.queue
//         })
//
//         console.log(`Message published to queue '${queueName}' with routing key '${routingKey}': ${message}`);
//
//         setTimeout (() => {
//             connection.close()
//             process.exit(0)
//         }, 500)
//
//     } catch (e) {
//         console.error('Error occurred while publishing message:', error);
//     }
// }
//
// async function publishMessageForSchedule (message) {
//     try {
//         const connection = await amqp.connect('amqp:/localhost')
//         const channel = await connection.createChannel()
//
//         let corId = uuid.v4
//         const q = await channel.assertQueue('', {
//             exclusive: true
//         })
//
//         await channel.sendToQueue((process.env.QUEUE_NAME+'_schedule'), Buffer.from(message), {
//             correlationId: corId,
//             replyTo: q.queue
//         })
//
//         console.log(`Message published to queue '${queueName}' with routing key '${routingKey}': ${message}`);
//
//         setTimeout (() => {
//             connection.close()
//             process.exit(0)
//         }, 500)
//
//     } catch (e) {
//         console.error('Error occurred while publishing message:', error);
//     }
// }
//
// async function publishMessageForEvent (message) {
//     try {
//         const connection = await amqp.connect('amqp:/localhost')
//         const channel = await connection.createChannel()
//
//         let corId = uuid.v4
//         const q = await channel.assertQueue('', {
//             exclusive: true
//         })
//
//         await channel.sendToQueue((process.env.QUEUE_NAME+'_event'), Buffer.from(message), {
//             correlationId: corId,
//             replyTo: q.queue
//         })
//
//         console.log(`Message published to queue '${queueName}' with routing key '${routingKey}': ${message}`);
//
//         setTimeout (() => {
//             connection.close()
//             process.exit(0)
//         }, 500)
//
//     } catch (e) {
//         console.error('Error occurred while publishing message:', error);
//     }
// }
