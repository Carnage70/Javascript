function EventListener(){
    document.getElementById("Comprobar").addEventListener("click", Comprobar());
}

function Comprobar(){

    var Num1 = Number (document.getElementById("Numero1").value);

    var Num2 = Number (document.getElementById("Numero2").value);

    var ImprimirInformacion = document.getElementById("ImprimirComprobacion")

    if(Num1 % 2 == 0 && Num2 % 2 == 0){
        ImprimirInformacion.innerText = "Si son multiplos!";
    }
    if(Num1 % 2 > 0 && Num2 % 2 > 0){
        ImprimirInformacion.innerText = "No son multiplos!";
    }
    if(Num1 % 2 == 0 && Num2 % 2 > 0){
        ImprimirInformacion.innerText = "Solo este puede ser multiplo " + Num1;
    }
    if(Num1 % 2 > 0 && Num2 % 2 == 0){
        ImprimirInformacion.innerText = "Solo este puede ser multiplo " + Num2
    }

}