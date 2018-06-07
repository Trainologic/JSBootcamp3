const net = require('net');

const HOST = '127.0.0.1';
const PORT = 3030;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    client.on('data', (data) => {
        console.log('DATA->', data.toString());

        client.write('It\'sa ME! MARIO');

        client.destroy();
    });
});

client.on('close', () => {
    console.log('Client closed');
});