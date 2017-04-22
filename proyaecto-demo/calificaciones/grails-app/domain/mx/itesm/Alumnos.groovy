package mx.itesm


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Alumnos {

	String nombre
	String apellidos
	String matricula
	String email
	int age
	boolean enabled

	static constraints = {
        matricula unique:true
        email email: true
        age min: 18
        enabled defaultValue: false
    }

}