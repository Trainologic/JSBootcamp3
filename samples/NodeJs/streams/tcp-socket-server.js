const fs = require('fs');
const net = require('net');

const HOST = 'localhost';
const PORT = 3030;

const writeStream = fs.createWriteStream(`${__dirname}/serverResponse.log`);

const server = net.createServer((socket) => {
    console.log('A client has connected');
    socket.write('WHO DIS? NEW PHONE');

    socket.on('data', (data) => {
        console.log('Data received', data.toString());
    });

    socket.on('error', (err) => {
       console.log('Huston we as socket error', err);
    });

    // Feature suggestion by Shai
    socket.on('end', () => {
       console.log('Socket closed');
    });

    socket.pipe(writeStream);
});

// Suggested by Fedor PORT BEFORE HOST!
server.listen(PORT, HOST);

server.on('listening', () => {
    console.log(`Started listening on ${HOST}: ${PORT}`);
});