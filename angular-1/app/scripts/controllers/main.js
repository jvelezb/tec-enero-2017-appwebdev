'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */
angular.module('angularTec1App')
  .controller('MainCtrl', function ($scope,$log) {
  	var modelo={
  		profesor : "Juan Velez",
  		alumnos:[{id:1,nombre: "Jose",matricula:'A000324324',estatus: false},
  				{id:2,nombre: "Alejandro", matricula:'A000354354324',estatus: false},
  				{id:3,nombre: "Daniela",matricula:'A0003345324',estatus:true}]
  	};
  	modelo.carrerasDisponibles = ['ITC','ITI','IEC'];
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
   $scope.addAlumno = function(alumno){
   					$log.debug('el valor de alumno id:'+alumno.id);
   					if(alumno.id==undefined ||alumno.id==null){
   			  		$scope.modelo.alumnos.push({id:$scope.modelo.alumnos.length,nombre:alumno.nombre,matricula:alumno.matricula, carrera:alumno.carrera,estatus: false});
   			  	}else{
   			  		$scope.alumnoInput = null;
   			  	}

   		
 
   }
   $scope.editar = function(alumno){
   		$log.debug('el valor de alumno id:'+alumno.id);
   		$scope.alumnoInput = alumno
   }


    
  });







