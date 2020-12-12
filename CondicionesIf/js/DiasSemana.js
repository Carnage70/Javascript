function EventListener(){
    document.getElementById("CalcularDia").addEventListener("click", CalcularDia());
}

function CalcularDia(){

    var dias = Number (document.getElementById("Dias").value);

    var ImprimirDias = document.getElementById("DiaImpreso");

    if(dias == 1){
        ImprimirDias.innerText = "El dia correspondiente es lunes"
    }
    if(dias == 2){
        ImprimirDias.innerText = "El dia correspondiente es martes"
    }
    if(dias == 3){
        ImprimirDias.innerText = "El dia correspondiente es miercoles"
    }
    if(dias == 4){
        ImprimirDias.innerText = "El dia correspondiente es jueves"
    }
    if(dias == 5){
        ImprimirDias.innerText = "El dia correspondiente es viernes"
    }
    if(dias == 6){
        ImprimirDias.innerText = "El dia correspondiente es sabado"
    }
    if(dias == 7){
        ImprimirDias.innerText = "El dia correspondiente es domingo"
    }

}