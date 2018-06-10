const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./usersRouter');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/users', usersRouter);



app.listen(4000, () => console.log('im running'));