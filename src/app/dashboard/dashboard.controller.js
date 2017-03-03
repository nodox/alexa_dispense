export class DashboardController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

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
    this.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.barSeries = ['Series A', 'Series B'];
    this.barData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];


  }





}
