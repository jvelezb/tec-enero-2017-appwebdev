package demo.clase
import mx.itesm.Alumno

class BootStrap {

    def init = { servletContext ->
    	new Alumno(nombre:"Juan").save();
    }
    def destroy = {
    }
}
