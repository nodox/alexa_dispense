/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';
import { DashboardController } from './dashboard/dashboard.controller';

import { SocketService } from '../app/components/socketFactory.service';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('universityClient', 
  ['ngAnimate', 'ngCookies', 'ngTouch', 
  'ngSanitize', 'ngMessages', 'ngAria', 'btford.socket-io',
  'ngResource', 'ui.router', 'toastr', 'chart.js'

  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('socket', SocketService)
  .controller('MainController', MainController)
  .controller('DashboardController', DashboardController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
