'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */
angular.module('angularTec1App')
  .controller('MainCtrl', function ($scope) {
  	var modelo={
  		profesor : "Juan Velez",
  		alumnos:[{nombre: "Jose",estatus: false},
  				{nombre: "Alejandro", estatus: false},
  				{nombre: "Daniela",estatus:true}]
  	};
  	$scope.modelo = modelo;
   $scope.cuentaAsistentes= function(){
   	 var cuenta = 0;
   	 angular.forEach($scope.modelo.alumnos, function(item){
   	 	if(item.estatus) cuenta++;
   	 })
   	 return cuenta;
   };
   $scope.alertaAlumnos = function(){
   	    return $scope.cuentaAsistentes()< 2 ?
   	    		"label-danger":"label-success";
   }
   $scope.addAlumno = function(texto){
   		$scope.modelo.alumnos.push({nombre:texto, estatus: false});
   }


    
  });







