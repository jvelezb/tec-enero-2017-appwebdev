package calificaciones

import mx.itesm.Alumnos

class BootStrap {

    def init = { servletContext ->
    	 new Alumnos(matricula: "A9955014",nombre: "Juan", apellidos: "Velez",age: 25, email:"juan@itesm.mx" ,enabled:true).save() 
    	new Alumnos(matricula: "A9955015",nombre: "Juan1", apellidos: "Velez3",age: 25, email:"jua3n@itesm.mx" ,enabled:false).save()
    }
    def destroy = {
    }
}
