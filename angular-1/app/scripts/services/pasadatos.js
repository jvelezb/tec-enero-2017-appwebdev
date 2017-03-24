'use strict';

/**
 * @ngdoc service
 * @name angularTec1App.PasaDatos
 * @description
 * # PasaDatos
 * Factory in the angularTec1App.
 */
angular.module('angularTec1App')
  .factory('PasaDatos', function ($log) {
    // Service logic
    // ...
    var profesor ={};
    var alumnos;
    return {
      setProfesor: function (profesor) {
        $log.debug("En el setProfesor:"+profesor);
        return profesor;
      },
      getProfesor:function () {
        $log.debug("En el getProfesor:"+this.profesor);
         this.profesor = profesor;
      },
      getAlumnos: function(){
         $log.debug("En el getAlumnos" + this.alumnos);
        return this.alumnos;
      },
      setAlumnos: function(alumnos){
         $log.debug("En el setAlumnos"+alumnos);
         this.alumnos = alumnos;
      }
    };
  });
