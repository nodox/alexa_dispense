var express = require('express');
var router = express.Router();


var userRegimen = {
  hours: {
    within1: 0,
    within2: 0,
    within3: 0,
  }
};

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pill', function(req, res, next) {

  res.io.emit("updatePillsDispensed", { day: 3, count: 1});

  // res.io.emit("updateDrugAdherenceChart", { 
  //   taken: {
  //     idx: 0,
  //     count: 1,
  //   },
  //   dispensed: {
  //     idx: 1,
  //     count: 1
  //   }
  // });

  console.log(req.query);

  var diff = Math.abs(parseInt(req.query.takenAt) - parseInt(userRegimen.prescribedTimeOfDay));

  if (diff <= 1) {

      userRegimen.hours.within1 += 1    
  }

  if (diff <= 2) {
      userRegimen.hours.within2 += 1    

  } 

  if (diff >= 3) {
    userRegimen.hours.within3 += 1    
 
  }

  res.io.emit("updateDrugAdherenceChart", userRegimen);

  res.end();
});

router.get('/regimen', function(req, res, next) {

  userRegimen.prescribedDrugName = req.query.prescribedDrugName;
  userRegimen.prescribedFrequency = req.query.prescribedFrequency;
  userRegimen.prescribedTimeOfDay = req.query.prescribedTimeOfDay;

  res.status(200).send({ done: true });
});


module.exports = router;
