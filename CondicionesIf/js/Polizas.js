function EventListener(){
    document.getElementById("PrecioFinal").addEventListener("click", PrecioFinal());
}

function PrecioFinal(){

    var tipo = document.getElementById("Seguros").value;

    var alcohol = document.getElementById("Alcohol").value;

    var lentes = document.getElementById("Lentes").value;

    var enfermedad = document.getElementById("Enfermedad").value;

    var edad = document.getElementById("Edad").value;

    var inicial1 = 1200

    var inicial2 = 950

    var preciofinal, Descuento1, Descuento2, Descuento3, Descuento4, Descuento5, Descuento6 = 0

    var ImprimirPrecio = document.getElementById("ImprimirPrecioFinal")

    if(tipo == '1' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Descuento1 = (inicial1) * .40;
        preciofinal = inicial1 + Descuento1;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Descuento2 = (inicial1) *.30;
        preciofinal = inicial1 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '6' && enfermedad == '7' && edad == '9'){
        Descuento3 = (inicial1) *.25;
        preciofinal = inicial1 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '6' && enfermedad == '8' && edad == '9'){
        Descuento4 = (inicial1) *.20;
        preciofinal = inicial1 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '6' && enfermedad == '7' && edad == '9'){
        Descuento5 = (inicial1) *.35;
        preciofinal = inicial1 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '5' && enfermedad == '8' && edad == '9'){
        Descuento5 = (inicial1) *.35;
        preciofinal = inicial1 + cargoalcohol + cargolentes + cargoedad;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '6' && enfermedad == '8' && edad == '9'){
        Descuento2 = (inicial1) *.30;
        preciofinal = inicial1 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '5' && enfermedad == '8' && edad == '9'){
        Descuento3 = (inicial1) *.25;
        preciofinal = inicial1 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    
    //--------//

    if(tipo == '1' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '10'){
        Descuento2 = (inicial1) * .30;
        preciofinal = inicial1 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '5' && enfermedad == '7' && edad == '10'){
        Descuento4 = (inicial1) *.20;
        preciofinal = inicial1 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '6' && enfermedad == '7' && edad == '10'){
        Descuento5 = (inicial1) *.15;
        preciofinal = inicial1 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '6' && enfermedad == '8' && edad == '10'){
        Descuento6 = (inicial1) *.10;
        preciofinal = inicial1 + Descuento6;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '6' && enfermedad == '7' && edad == '10'){
        Descuento3 = (inicial1) *.25;
        preciofinal = inicial1 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '5' && enfermedad == '8' && edad == '10'){
        Descuento3 = (inicial1) *.25;
        preciofinal = inicial1 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '3' && lentes == '6' && enfermedad == '8' && edad == '10'){
        Descuento4 = (inicial1) *.20;
        preciofinal = inicial1 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '1' && alcohol == '4' && lentes == '5' && enfermedad == '8' && edad == '10'){
        Descuento5 = (inicial1) *.15;
        preciofinal = inicial1 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    //--------//

    if(tipo == '2' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Descuento1 = (inicial2) * .40;
        preciofinal = inicial2 + Descuento1;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '5' && enfermedad == '7' && edad == '9'){
        Descuento2 = (inicial2) *.30;
        preciofinal = inicial2 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '6' && enfermedad == '7' && edad == '9'){
        Descuento3 = (inicial2) *.25;
        preciofinal = inicial2 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '6' && enfermedad == '8' && edad == '9'){
        Descuento4 = (inicial2) *.20;
        preciofinal = inicial2 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '6' && enfermedad == '7' && edad == '9'){
        Descuento5 = (inicial2) *.35;
        preciofinal = inicial2 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '5' && enfermedad == '8' && edad == '9'){
        Descuento5 = (inicial2) *.35;
        preciofinal = inicial2 + cargoalcohol + cargolentes + cargoedad;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '6' && enfermedad == '8' && edad == '9'){
        Descuento2 = (inicial2) *.30;
        preciofinal = inicial2 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '5' && enfermedad == '8' && edad == '9'){
        Descuento3 = (inicial2) *.25;
        preciofinal = inicial2 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    
    //--------//

    if(tipo == '2' && alcohol == '3' && lentes == '5' && enfermedad == '7' && edad == '10'){
        Descuento2 = (inicial2) * .30;
        preciofinal = inicial2 + Descuento2;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '5' && enfermedad == '7' && edad == '10'){
        Descuento4 = (inicial2) *.20;
        preciofinal = inicial2 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '6' && enfermedad == '7' && edad == '10'){
        Descuento5 = (inicial2) *.15;
        preciofinal = inicial2 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '6' && enfermedad == '8' && edad == '10'){
        Descuento6 = (inicial2) *.10;
        preciofinal = inicial2 + Descuento6;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '6' && enfermedad == '7' && edad == '10'){
        Descuento3 = (inicial2) *.25;
        preciofinal = inicial2 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '5' && enfermedad == '8' && edad == '10'){
        Descuento3 = (inicial2) *.25;
        preciofinal = inicial2 + Descuento3;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '3' && lentes == '6' && enfermedad == '8' && edad == '10'){
        Descuento4 = (inicial2) *.20;
        preciofinal = inicial2 + Descuento4;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }
    if(tipo == '2' && alcohol == '4' && lentes == '5' && enfermedad == '8' && edad == '10'){
        Descuento5 = (inicial2) *.15;
        preciofinal = inicial2 + Descuento5;
        ImprimirPrecio.innerText = "El costo final de tu seguro es " + preciofinal;
    }

}

