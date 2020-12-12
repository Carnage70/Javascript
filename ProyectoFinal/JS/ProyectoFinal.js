function Submit(){
    var correo = String(document.getElementById("correo").value);

    if(correo != ""){
        localStorage.setItem("Correo", correo);
        alert("Correo ingresado");
    }else{
        alert("La operacion no se realizo correctamente");
        alert("Verifique su informacion");
    }
}

function Submit2(){

    var nombre = String(document.getElementById("Nombre").value);
    var apellido = String(document.getElementById("Apellido").value);
    var correo = String(document.getElementById("correo2").value);
    var mensaje = String(document.getElementById("comentarios").value);

    if(nombre !="" || apellido !="" || correo !="" || mensaje !=""){
        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Apellido", apellido);
        localStorage.setItem("Correo", correo);
        localStorage.setItem("Mensaje", mensaje);
        alert("Se han registrado los datos correctamente");
    }else{
        alert("No se han podido registrar los datos");
        alert("Verifique su informacion");
    }

}