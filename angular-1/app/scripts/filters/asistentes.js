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
  .filter('asistentes', function ($log) {
    return function (items,mostrarTodos) {
    
      var resultado=[];
      angular.forEach(items, function(item){
      	if(item.estatus ==true|| mostrarTodos ==true){
      		resultado.push(item);

      	}
      });
      return resultado;
    };
  });


