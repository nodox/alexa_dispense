export class SocketService {
  constructor ($log, $http, socketFactory) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;

    this.socket = socketFactory({
      ioSocket: io()
    });
  }



}
