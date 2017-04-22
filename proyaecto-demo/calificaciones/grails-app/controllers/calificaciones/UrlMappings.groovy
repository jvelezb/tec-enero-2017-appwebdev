package calificaciones

class UrlMappings {

    static mappings = {
        "/alumnos"(resources:"mx.itesm.Alumnos")
        "/alumnosEnabled"(controller:"Alumnos", action:"alumnosEnabled")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
