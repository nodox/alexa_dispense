var express = require('express');
var router = express.Router();


var userRegimen = {

  weeklyActuals: [0,0,0,0,0,0,0], 
  weeklyTotals: [0,0,0,0,0,0,0],
  weeklyPercent: [0,0,0,0,0,0,0],
  hours: {
    within1: 0,
    within2: 0,
    within3: 0,
  }
};

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// day
// takenValue 0 | 1

router.get('/pill', function(req, res, next) {

  userRegimen.weeklyActuals[req.query.day] += parseInt(req.query.taken);
  userRegimen.weeklyTotals[req.query.day] += 1;

  var percent = (userRegimen.weeklyActuals[req.query.day] / userRegimen.weeklyTotals[req.query.day]) * 100;
  // console.log(userRegimen.weeklyActuals[req.query.day]);
  // console.log(userRegimen.weeklyTotals[req.query.day]);
  // console.log(percent);
  res.io.emit("updatePillsDispensed", { 
    day: req.query.day, 
    percent: percent
  });



  if (req.query.diff) {
    // var diff = Math.abs(parseInt(req.query.takenAt) - parseInt(userRegimen.prescribedTimeOfDay));
    if (req.query.diff <= 1) {
        userRegimen.hours.within1 += 1;  
    }
    if (req.query.diff <= 2) {
        userRegimen.hours.within2 += 1;
    } 
    if (req.query.diff >= 3) {
      userRegimen.hours.within3 += 1;  
    }
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
