function EventListener(){
    document.getElementById("CalcularPresupuesto").addEventListener("click", CalcularPresupuesto());
}

function CalcularPresupuesto(){

    var presupuesto = Number (document.getElementById("Presupuesto").value);

    var articulo1 = Number (document.getElementById("Articulo1").value);

    var articulo2 = Number (document.getElementById("Articulo2").value);

    var articulo3 = Number (document.getElementById("Articulo3").value);

    var articulo4 = Number (document.getElementById("Articulo4").value);

    var ImprimirInformacion = document.getElementById("ImprimirPresupuesto");

    var suma = articulo1 + articulo2 + articulo3 + articulo4;

    if(presupuesto >= suma){
        ImprimirInformacion.innerText = "El precio esta dentro del presupuesto"
    }
    if(presupuesto < suma){
        ImprimirInformacion.innerText = "El precio esta fuera del presupuesto"
    }
}