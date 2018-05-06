const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/post', bodyParser.urlencoded({extended: false}), function (req, res) {
    res.status(200).send(req.body);
});

app.get('/get', function (req, res) {
    res.status(200).send(req.params);
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);