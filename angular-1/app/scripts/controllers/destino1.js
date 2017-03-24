'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:Destino1Ctrl
 * @description
 * # Destino1Ctrl
 * Controller of the angularTec1App
 */
angular.module('angularTec1App')
  .controller('Destino1Ctrl',  function ($scope,$log,PasaDatos) {
  	$log.debug("Estoy en el destino controller"+PasaDatos.getProfesor());
  	$scope.profesor = PasaDatos.getProfesor();

    
  });
