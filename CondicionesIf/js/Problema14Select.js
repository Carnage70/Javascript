function EventListener(){
    document.getElementById("CalcularDia").addEventListener("click", CalcularDia());
}

function CalcularDia(){

    var dia = document.getElementById("Dias").value;

    var ImprimirInformacion = document.getElementById("ImprimirDia")

    if(dia == '1'){
        ImprimirInformacion.innerText = "Lunes!"
    }
    if(dia == '2'){
        ImprimirInformacion.innerText = "Martes!"
    }
    if(dia == '3'){
        ImprimirInformacion.innerText = "Miercoles!"
    }
    if(dia == '4'){
        ImprimirInformacion.innerText = "Jueves!"
    }
    if(dia == '5'){
        ImprimirInformacion.innerText = "Viernes!"
    }
    if(dia == '6'){
        ImprimirInformacion.innerText = "Sabado!"
    }
    if(dia == '7'){
        ImprimirInformacion.innerText = "Domingo!"
    }
}
