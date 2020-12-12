function loginclick(){

    var usuario = String(document.getElementById("Usuario").value);

    var contraseña = String(document.getElementById("Contraseña").value);

    if(usuario != "" && contraseña != ""){
        localStorage.setItem("Usuario", usuario);
        localStorage.setItem("Contraseña", contraseña);
        alert("Inicio de Sesion correcto");
    }else{
        alert("No se ha podido iniciar sesion, verifique correctamente sus datos")
    }
}