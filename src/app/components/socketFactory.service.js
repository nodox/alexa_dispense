export class SocketService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;

    this.socket = io('http://localhost:3005');
  }



}
