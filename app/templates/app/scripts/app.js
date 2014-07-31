'use strict';

angular.module('<%= _.camelize(appname)%>App', [
  'ngRoute',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('default', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      url: '/'
    })
    .state('otherwise', {
      url: '/'
    });
});
