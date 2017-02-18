'use strict';

/**
 * @ngdoc filter
 * @name angularTec1App.filter:asistentes
 * @function
 * @description
 * # asistentes
 * Filter in the angularTec1App.
 */
angular.module('angularTec1App')
  .filter('asistentes', function () {
    return function (input) {
      return 'asistentes filter: ' + input;
    };
  });
