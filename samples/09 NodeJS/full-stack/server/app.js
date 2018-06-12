const express = require('express');
const cors = require('cors');

const app = express();
const usersRouter = require('./usersRouter');
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/users', usersRouter);

const groups= {};

io.on('connection', (socket)=>{
    console.log('new connection');
    socket.on('global', (msg)=>{
        console.log(msg);
        socket.emit('global', 'ack: '+msg);
    });

    // login
    socket.on('login', (username)=>{
        socket.username = username;
        // io.emit('connections', username);
        console.log(`username ${username} was logged in!`);
        socket.broadcast.emit('connections', username);
    });

    // rooms
    socket.on('join-group', (username, groupname)=>{
        // io.emit('connections', username);
        console.log(`username: ${username} has joined ${groupname}`);
        socket.join(groupname);

        io.to(groupname).emit('global', 'hello '+username);
        console.log(Object.keys(socket.rooms));
        // groups[groupname] = Object.keys(socket.rooms)[0]
    });

    socket.on('leave-group', groupname=>{
         socket.leave(groupname);
        console.log(`${socket.username} left ${groupname}`)

    });


    // socket disconnect
    socket.on('disconnect', () => {
        console.log(socket.rooms);
    });

});


httpServer.listen(4000, () => console.log('im running'));