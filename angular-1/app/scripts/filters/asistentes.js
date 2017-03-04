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
    return function (items, mostrarTodos) {
    	$log.debug(items[0].nombre+" valr "+mostrarTodos);
      var resultado=[];
      angular.forEach(items, function(item){
      	if(item.estatus ==false|| mostrarTodos ==true){
      		mostrarTodos = true;
      		resultado.push(item);

      	}
      });
      return resultado;
    };
  });


