var express = require('express');
var Keen = require('keen.io');

var router = express.Router();

const client = Keen.configure({
    projectId: "58b9c6b88db53dfda8a8a678",
    writeKey: "896B61B10C39BDE233958E0DE66661C4B96205146384CB96374493954A481BA8"
});


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
