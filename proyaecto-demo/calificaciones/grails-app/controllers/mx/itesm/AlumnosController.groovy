package mx.itesm


import grails.rest.*
import grails.converters.*

class AlumnosController extends RestfulController {
    static responseFormats = ['json', 'xml']
    AlumnosController() {
        super(Alumnos)
    }


    def alumnosEnabled(){
    	respond Alumnos.findAllByEnabled(true), view: 'index'
    }
}
