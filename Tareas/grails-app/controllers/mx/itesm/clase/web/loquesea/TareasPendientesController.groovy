package mx.itesm.clase.web.loquesea


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured


@Secured(['ROLE_ADMIN'])
class TareasPendientesController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TareasPendientesController() {
        super(TareasPendientes)
    }

    def enProceso(){
    	respond TareasPendientes.findAllByHecho(false),view :'index'
    }
}
