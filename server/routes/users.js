var express = require('express');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pill', function(req, res, next) {
  console.log('yerrrr');

  res.io.emit("sockit", { day: 1, count: 100});
  res.end();
 
});

module.exports = router;
