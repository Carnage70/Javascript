function EventListener(){
    document.getElementById("CalcularNumero").addEventListener("click", CalcularNumero());
}

function CalcularNumero(){

    var Num1 = Number(document.getElementById("Numero1").value);

    var Num2 = Number(document.getElementById("Numero2").value);

    var Num3 = Number(document.getElementById("Numero3").value);

    var ImprimirResultado = document.getElementById("ImprimirNumero");

    if(Num1 > Num2 && Num1 > Num3){
        ImprimirResultado.innerText = Num1 + " Es el numero mayor "
    }
    if(Num2 > Num1 && Num2 > Num3){
        ImprimirResultado.innerText = Num2 + " Es el numero mayor "
    }
    if(Num3 > Num1 && Num3 > Num2){
        ImprimirResultado.innerText = Num3 + " Es el numero mayor "
    }
}