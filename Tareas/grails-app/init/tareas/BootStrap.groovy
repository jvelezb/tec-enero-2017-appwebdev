package tareas

import mx.itesm.clase.web.loquesea.TareasPendientes
class BootStrap {

    def init = { servletContext ->
    	15.times{new TareasPendientes(descripcion:"Tarea ${it+1}",hecho:true).save()}
    	Role admin = new Role("ROLE_ADMIN").save()
    	User user = new User("juan","password").save()
    	UserRole.create(user,admin,true)
    }
    def destroy = {
    }
}
