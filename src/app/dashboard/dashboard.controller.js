export class DashboardController {
  constructor ($timeout, webDevTec, toastr, socket, $scope, $http) {
    'ngInject';

    this.$scope = $scope;
    this.$http = $http;
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1487304318548;
    this.toastr = toastr;
    this.hello = 'hello word';

    // Display on the front dashboard somewhere
    this.regimenSchedule = {};


    // Pie Chart
    this.pieLabels = ["Taken within 1 hours", "Taken with 2 hours", "Taken within 3 or more hours"];
    this.pieData = [0, 0, 0];
    this.pieOptions = {
      tooltipSize: 100
    };

    // socket.socket.on('updateDrugAdherenceChart', (data) => {
    //   this.pieData[data.dispensed.idx] += data.dispensed.count;
    //   this.pieData[data.taken.idx] += data.taken.count;
    // });

    // Bar chart
    this.barLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Friday', 'Sat', 'Sun'];
    this.barSeries = ['Pill Count'];
    this.barData = [0, 0, 0, 0, 0, 0, 0];

    socket.socket.on('updatePillsDispensed', (data) => {
      this.barData[data['day']] = data.percent;
    });

    socket.socket.on('updateDrugAdherenceChart', (data) => {
      this.pieData[0] = data.hours.within1;
      this.pieData[1] = data.hours.within2;
      this.pieData[2] = data.hours.within3;
    });

  }

  createNewRegimen() {

    // console.log(this.regimenSchedule.prescribedTimeOfDay.getTime()); // milliseconds


    this.$http.get('/users/regimen', {params: this.regimenSchedule})
      .then((res) => {
        console.log('hello');

      }, (err) => {
        console.log(err);
      });

  }

}
