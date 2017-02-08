
var empleadoFantasma={
	"id":0,
	"nomina":"",
	"nombre":"",
	"apellido":"",
	"departamento":""
}
var empleados=new Array(empleadoFantasma);
var idCounter=0;
var list='';

function registrarEmpleado() {

    var nomina=document.getElementById("nomina").value;
    var apellido=document.getElementById("apellido").value;
    var nombre=document.getElementById("nombre").value;
    var departamento=document.getElementById("departamento").value;
    var id=empleados.length;
    idCounter++;

    var empleado={
    	"id":idCounter,
    	"nomina":nomina,
    	"nombre":nombre,
    	"apellido":apellido,
    	"departamento":departamento
    }
    empleados.push(empleado);
    console.log(empleados[idCounter]);
    var lista=document.getElementById("lista");
    var tr=document.createElement("tr");
    tr.id='empleado'+idCounter;
   	var str="<td>"+nomina+"</td>";
   	str+="<td>"+nombre+"</td>";
   	str+="<td>"+apellido+"</td>";
   	str+="<td>"+departamento+"</td>";
   	str+='<td><form id="eliminar" action="javascript:eliminarEmpleado('+id+')"><input type="submit" class="btn btn-info" value="Eliminar"></input></form></td>';
   	str+='<td><form id="modificar" action="javascript:setInformationOnUpdateDialog('+id+')"><input type="submit" class="btn btn-info" value="Modificar"></input></form></td>';
   	tr.innerHTML=str;
   	lista.appendChild(tr);
   	/*
   	*Guarda el html de la lista para recuperarlo tras una busqueda
   	*/
   	list=lista.innerHTML;	
   	document.getElementById("registro").reset();
   	$("#registroModal").modal("hide");

}

function setInformationOnUpdateDialog(id){
	console.log(id);
	var e=null;
	for (var i =0; i<empleados.length; i++) {
		if(empleados[i].id==id){
			e=empleados[i];
			break;
		}
	}
	console.log(e);
	document.getElementById("idUpd").value=e.id;
	document.getElementById("nominaUpd").value=e.nomina;
	document.getElementById("apellidoUpd").value=e.apellido;
	document.getElementById("nombreUpd").value=e.nombre;
	document.getElementById("departamentoUpd").value=e.departamento;
	$("#updateModal").modal("show");

}

function updateEmpleado(){

	
	var id=document.getElementById("idUpd").value;
	var nomina=document.getElementById("nominaUpd").value;
	var apellido=document.getElementById("apellidoUpd").value;
	var nombre=document.getElementById("nombreUpd").value;
	var departamento=document.getElementById("departamentoUpd").value;
	for (var i =0; i<empleados.length; i++) {
		if(empleados[i].id==id){
			empleados[i].nomina=nomina;
			empleados[i].apellido=apellido;
			empleados[i].nombre=nombre;
			empleados[i].departamento=departamento;
			break;
		}
	}
	var tr=document.getElementById('empleado'+id);
	var str="<td>"+nomina+"</td>";
	str+="<td>"+nombre+"</td>";
	str+="<td>"+apellido+"</td>";
	str+="<td>"+departamento+"</td>";
	str+='<td><form id="eliminar" action="javascript:eliminarEmpleado('+id+')"><input type="submit" class="btn btn-info" value="Eliminar"></input></form></td>';
	str+='<td><form id="modificar" action="javascript:setInformationOnUpdateDialog('+id+')"><input type="submit" class="btn btn-info" value="Modificar"></input></form></td>';
	tr.innerHTML=str;
	var lista=document.getElementById("lista");
	list=list.innerHTML;
	$("#updateModal").modal("hide");

}

function busqueda(){
	console.log('buscando');
	var query=document.getElementById("query").value;
	if(query==''){
		document.getElementById("lista").innerHTML=list;
	}else{
		var lista=document.getElementById("lista");
		lista.innerHTML="";		
		for (var i =0; i<empleados.length; i++) {
			if(empleados[i].nomina.includes(query) || empleados[i].nombre.includes(query) || empleados[i].apellido.includes(query) || empleados[i].departamento.includes(query)){
					var tr=document.createElement("tr");
					tr.id='empleado'+empleados[i].id;
					var str="<td>"+empleados[i].nomina+"</td>";
					str+="<td>"+empleados[i].nombre+"</td>";
					str+="<td>"+empleados[i].apellido+"</td>";
					str+="<td>"+empleados[i].departamento+"</td>";
					tr.innerHTML=str;
					lista.appendChild(tr);				
			}
		}
	}
}

function eliminarEmpleado(id){
	var tr=document.getElementById('empleado'+id);
	tr.parentNode.removeChild(tr);
}