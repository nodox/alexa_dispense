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
    this.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    this.pieData = [300, 500, 100];
    this.pieOptions = {
      tooltipSize: 100
    };
    this.pieQuery = {};

    // Bar chart
    this.barLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Friday', 'Sat', 'Sun'];
    this.barSeries = ['Pill Count'];
    this.barData = [65, 59, 80, 81, 56, 75, 56];

    socket.socket.on('sockit', (data) => {
      console.log('Begin');
      this.updateData(data);
      console.log('end');

    });

    // this.$scope.$on('chart-update', function (evt, chart) {
    //   console.log('We are reached');
    //   console.log(chart);
    // });

    // var ctx = document.getElementById('bar');
    // console.log(ctx);
    // ctx.resize();
    // console.log(this);
    // this.$apply();
  }

  updateData(newData) {
    console.log('Broo');
    console.log(this.barData);
    
    this.barData.pop();

    // console.log(this.barData["_chartjs"].resize());
    console.log(this.barData);

    // this.barData = [120, 12, 99, 65, 59, 56, 55, 40];
    // console.log('Begin');
    // console.log(newData);
    // this.barData[newData['day']] = newData.count;
    // console.log('end');
  }








}
