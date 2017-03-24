
/**
 * @ngdoc overview
 * @name angularTec1App
 * @description
 * # angularTec1App
 *
 * Main module of the application.
 */
angular
  .module('angularTec1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/destino1', {
        templateUrl: 'views/destino1.html',
        controller: 'Destino1Ctrl',
        controllerAs: 'destino1'
      })
      .when('/nombre', {
        templateUrl: 'views/nombre.html',
        controller: 'NombreCtrl',
        controllerAs: 'nombre'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
