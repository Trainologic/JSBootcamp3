import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Please use /:language to get a result');
});

router.get('/english', (req, res) => {
    res.send('Hello, World!');
});

router.get('/spanish', (req, res) => {
   res.send('Hola, Bandejo');
});

router.get('/colombian', (req, res) => {
    res.send('I <3 Crack');
});

export default router;