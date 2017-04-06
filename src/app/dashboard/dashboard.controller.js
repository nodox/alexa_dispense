export class DashboardController {
  constructor ($timeout, webDevTec, toastr, socket, $scope) {
    'ngInject';

    this.$scope = $scope;
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1487304318548;
    this.toastr = toastr;
    this.hello = 'hello word';

    // Pie Chart
    this.pieLabels = ["Administered", "Taken"];
    this.pieData = [3, 5];
    this.pieOptions = {
      tooltipSize: 100
    };
    socket.socket.on('updateDrugAdherenceChart', (data) => {
      this.pieData[data.dispensed.idx] += data.dispensed.count;
      this.pieData[data.taken.idx] += data.taken.count;
    });

    // Bar chart
    this.barLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Friday', 'Sat', 'Sun'];
    this.barSeries = ['Pill Count'];
    this.barData = [11, 9, 15, 9, 0, 0, 0];

    socket.socket.on('updatePillsDispensed', (data) => {
      this.barData[data['day']] += data.count;
    });




  }

}
