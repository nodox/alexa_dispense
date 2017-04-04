var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pill', function(req, res, next) {

  res.io.emit("updatePillsDispensed", { day: 1, count: 1});

  res.io.emit("updateDrugAdherenceChart", { 
    taken: {
      idx: 0,
      count: 1,
    },
    dispensed: {
      idx: 1,
      count: 1
    }
  });

  res.end();
});



module.exports = router;
