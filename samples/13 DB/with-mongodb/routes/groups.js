var express = require('express');
const Group = require('./../models/group');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Group.find()
      .populate('users')
      .then(data=>{
            res.json(data);
      })
      .catch((err)=>{
          res.status(500).send(err);
      });
});

/*router.post('/', function(req, res){
    const user = new User(req.body);
    user.save()
        .then((data)=>{
            res.json(data._doc);
        });

    // User.create(req.body, (err, data)=>{});
});*/

module.exports = router;
