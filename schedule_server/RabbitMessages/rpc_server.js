// const amqp = require('amqplib')
// const uuid = require('uuid')
//
// async function ReplyMessage (queueName, routingKey, message) {
//     try {
//         const connection = await amqp.connect('amqp:/localhost')
//         const channel = await connection.createChannel()
//
//         const q = await channel.assertQueue(process.env.QUEUE_NAME, {
//             durable: true
//         })
//         await channel.prefetch(1)
//
//         await channel.consume(process.env.QUEUE_NAME+'_profile', msg => {
//             const req = JSON.parse(msg.content.toString())
//
//             return new Promise((resolve, reject) => {
//                 // Создаем временный response объект
//                 const res = {
//                     status: function (statusCode) {
//                         return this;
//                     },
//                     json: function (data) {
//                         resolve(data);
//                     }
//                 };
//
//                 switch (req.route)
//                 {
//                     case ''
//                 }
//
//             });
//
//         })
//
//         console.log(`Message published to queue '${queueName}' with routing key '${routingKey}': ${message}`);
//
//         setTimeout (() => {
//             connection.close()
//             process.exit(0)
//         }, 500)
//     } catch (e) {
//         console.error('Error occurred while publishing message:', error);
//     }
// }
//
//
// async function proccessMessage(req) {
//     switch (req.route){
//         case req.route.includes('/editProfilePhoto'):
//            const res =
//            return res
//     }
// }