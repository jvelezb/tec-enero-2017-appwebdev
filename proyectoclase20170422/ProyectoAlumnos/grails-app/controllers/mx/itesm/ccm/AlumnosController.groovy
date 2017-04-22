package mx.itesm.ccm


import grails.rest.*
import grails.converters.*

class AlumnosController extends RestfulController {
    static responseFormats = ['json', 'xml']
    AlumnosController() {
        super(Alumnos)
    }

    def alumnosHabilitados(){
    	def listadoAlumnosActivos = Alumnos.findAllByHabilitado(true)
    	respond listadoAlumnosActivos, view: 'index'
    }

}
