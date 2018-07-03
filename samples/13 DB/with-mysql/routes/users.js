var express = require('express');
var db = require('./../db')();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM users', (err, results)=>{
    res.json(results);
  });
});

router.post('/', (req,res)=>{
  console.log(req.body);
  res.status(200).send();
})

module.exports = router;
