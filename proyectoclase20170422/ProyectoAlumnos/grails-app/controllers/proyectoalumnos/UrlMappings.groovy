package proyectoalumnos

class UrlMappings {

    static mappings = {

        "/alumnos"(resources:"mx.itesm.ccm.Alumnos")
        "/alumnosActivos"(controller:"Alumnos", action:"alumnosHabilitados")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
