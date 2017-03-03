var express = require('express');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pill', function(req, res, next) {
  // send single event to Keen IO 
  client.addEvent("my event collection", {"property name": "property value"}, function(err, data) {
      if (err) {
          res.json(err);
      } else {
          res.send("Hooray, it worked!");
      }
  });
 
});

module.exports = router;
