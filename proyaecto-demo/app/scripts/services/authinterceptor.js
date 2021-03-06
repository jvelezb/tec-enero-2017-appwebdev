'use strict';

/**
 * @ngdoc service
 * @name clienteAngularApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the clienteAngularApp.
 */
angular.module('clienteAngularApp')
  .factory('authInterceptor', function ($rootScope,$window) {
      return {
        request: function(config){
              config.headers = config.headers || {};
              if($window.sessionStorage.token){
                  config.headers.Authorization = "Bearer "
                        +$window.sessionStorage.token;
              }
              return config;
        }
      };
  }).config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  });
