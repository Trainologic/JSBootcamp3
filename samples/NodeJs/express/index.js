const express = require('express');

const app = express();

// MIDDLEWARES

app.use((req, res, next) => {
   console.log('Hey, someone connected');

   next();
});

app.use('/user', (req, res, next) => {
    req.user = {name: 'crackdealer3000'};

    next();
});

// ENDPOINTS

app.get('/', (req, res) => {
    res.json('Hello world');
});

app.get('/user', (req, res) => {
    res.json(req.user);
});

app.listen(3000);