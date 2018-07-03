var express = require('express');
const User = require('./../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
      .then(data=>{
            res.json(data);
      })
      .catch((err)=>{
          res.status(500).send(err);
      });
});

router.post('/', function(req, res){
    const user = new User(req.body);
    user.save()
        .then((data)=>{
            res.json(data._doc);
        });

    // User.create(req.body, (err, data)=>{});
});

module.exports = router;
