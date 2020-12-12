function EventListener(){
    document.getElementById("CalcularDescuento").addEventListener("click", CalcularDescuento());
}

function CalcularDescuento(){

    var precio = Number (document.getElementById("Precio").value);

    var ImprimirPrecio = document.getElementById("ImprimirDescuento");

    var ImprimirPrecio2 = document.getElementById("ImprimirDescuento2");

    var Descuento1 = 0

    var Descuento2 = 0

    var Descuento3 = 0

    var Descuento4 = 0

    if(precio >= 3600){
        Descuento1 = (precio) *.86;
        Descuento3 = (precio) *.14;
        ImprimirPrecio.innerText = "El precio final de tu traje es " + Descuento1;
        ImprimirPrecio2.innerText = "Este es tu descuento " + Descuento3;
    }
    if(precio < 3600){
        Descuento2 = (precio) *.93;
        Descuento4 = (precio) *.07;
        ImprimirPrecio.innerText = "El precio final de tu traje es " + Descuento2;
        ImprimirPrecio2.innerText = "Este es tu descuento " + Descuento4;
    }
}