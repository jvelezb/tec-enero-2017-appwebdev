package proyectoalumnos

import mx.itesm.ccm.Alumnos

class BootStrap {

    def init = { servletContext ->
    	new Alumnos(matricula:"1232", 
    		         nombre:"Juan",
    		         apellidos:"Velez",
    		         edad: 10,
    		         email:"juan@itesm.mx",
    		         habilitado:true).save()
    	new Alumnos(matricula:"9550", 
    		         nombre:"Jose",
    		         apellidos:"XYZ",
    		         edad: 30,
    		         email:"jose@itesm.mx",
    		         habilitado:false).save()
         new Alumnos(matricula:"9999", 
    		         nombre:"Luis",
    		         apellidos:"ABC",
    		         edad: 19,
    		         email:"jluis@itesm.mx",
    		         habilitado:false).save()   
    		    }
    def destroy = {
    }
}
