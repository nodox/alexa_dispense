export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('tutorial', {
      url: '/tutorial',
      templateUrl: 'app/tutorial/tutorial.html',
      controller: 'TutorialController',
      controllerAs: 'tutorial'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    });

  $urlRouterProvider.otherwise('/');
}
