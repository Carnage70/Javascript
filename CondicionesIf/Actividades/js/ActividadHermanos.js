function EventListener(){
    document.getElementById("CompararEdad").addEventListener("click", CompararEdad());
}

function CompararEdad()
{
    var edad = Number (document.getElementById("edad1").value);

    var edad2 = Number (document.getElementById("edad2").value);

    var ImprimirInformacion = document.getElementById("ImprimirEdad");

    var dif1 = edad - edad2;

    var dif2 = edad2 - edad;

    if(edad > edad2){
    ImprimirInformacion.innerText = "La persona 1 es mayor con " + edad + " años y tienen una diferencia de " + dif1 + " año/s";
    }
    else if(edad < edad2){
    ImprimirInformacion.innerText = "La persona 2 es mayor con " + edad2 + " años y tienen una diferencia de " + dif2 + " año/s";
    }
}