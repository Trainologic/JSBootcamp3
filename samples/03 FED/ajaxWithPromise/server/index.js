const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DbService = require('./lib/db_service');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const db = {
    rooms: []
};


app.post('/login', (req, res)=>{
    setTimeout(()=> {
        if (req.body.username === 'batman' && req.body.password === 'robin') {
            res.send({success: true, token: 'dfgdgfdfg'});
        }
        else {
            res.status(403).send('error');
        }
    }, 2000);
});


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);