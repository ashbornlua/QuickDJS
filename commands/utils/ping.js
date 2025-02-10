module.exports = {
    name: 'ping',
    description: 'Checks the bot\'s latency.',
    category: 'Utility',
    execute(message, args) {
        const sent = Date.now();
        message.reply('Pinging...').then((reply) => {
            const ping = Date.now() - sent;
            const wsPing = Math.round(message.client.ws.ping);
            reply.edit(`Pong! Latency: \`${ping}ms\`, WebSocket Ping: \`${wsPing}ms\``); // Edit the reply
        }).catch((error) => {
            console.error('Error replying to ping command:', error);
            message.channel.send('There was an error calculating the ping.');
        });
    },
};