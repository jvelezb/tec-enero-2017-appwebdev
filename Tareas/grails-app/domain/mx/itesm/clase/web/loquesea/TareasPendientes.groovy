package mx.itesm.clase.web.loquesea


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class TareasPendientes {
	String descripcion 
	boolean hecho

}