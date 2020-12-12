function EventListener(){
    document.getElementById("CalcularCargo").addEventListener("click", CalcularCargo())
}

function CalcularCargo(){

    var tipo = document.getElementById("Seguros").value;

    var alcohol = document.getElementById("Alcohol").value;

    var lentes = document.getElementById("Lentes").value;
    
    var enfermedad = document.getElementById("Enfermedad").value;

    var edad = document.getElementById("Edad").value;

    var inicial1 = 1200

    var inicial2 = 950

    var preciofinal, Cargo1, Cargo2, Cargo3, Cargo4, Cargo5, Cargo6 = 0

    var ImprimirCargo = document.getElementById("ImprimirCargoFinal");

    if(tipo == '1' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Cargo1 = (inicial1) *.40;
        preciofinal = inicial1 + Cargo1;
        ImprimirCargo.innerText = "El costo final de tu seguro es " + preciofinal
    }
    if(tipo == '1' && alcohol == '4' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Cargo2 = (inicial1) *.30;
        preciofinal = inicial1 + Cargo2;
        ImprimirCargo.innerText = "El costo final de tu seguro es " + preciofinal
    }
    if(tipo == '1' && alcohol == '4' && lentes == '6' && enfermedad == '7' && edad == '9'){
        Cargo3 = (inicial1) *.25;
        preciofinal = inicial1 + Cargo3;
        ImprimirCargo.innerText = "El costo final de tu seguro es " + preciofinal
    }
    if(tipo == '2' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Cargo1 = (inicial2) *.40;
        preciofinal = inicial2 + Cargo1;
        ImprimirCargo.innerText = "El costo final de tu seguro es " + preciofinal
    }


}
