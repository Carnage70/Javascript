function EventListener(){
    document.getElementById("CalcularPromedio").addEventListener("click", CalcularPromedio());
}

function CalcularPromedio(){

    var cal1 = Number (document.getElementById("Calificacion1").value);
    
    var cal2 = Number (document.getElementById("Calificacion2").value);
    
    var cal3 = Number (document.getElementById("Calificacion3").value);

    var cal4 = Number (document.getElementById("Calificacion4").value);

    var ImprimirInformacion = document.getElementById("Promedio");

    var ImprimirInformacion2 = document.getElementById("Minimo");

    var Promedio = 0

    var Minimo = 0

    //Calificaciones 10 9 8 y 7
    //cal1 = 10
    //cal2 = 9
    //cal3 = 8
    //cal4 = 7
    //Math.min es para sacar el numero menor automaticamente

    if(cal1 < cal2 && cal1 < cal3 && cal1 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal2 + cal3 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es " + Minimo;
        ImprimirInformacion.innerText = "El promedio es " + Promedio;
    }
    if(cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal3 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es " + Minimo;
        ImprimirInformacion.innerText = "El promedio es " + Promedio;
    }
    if(cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal2 + cal4) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es " + Minimo;
        ImprimirInformacion.innerText = "El promedio es " + Promedio;
    }
    if(cal4 < cal1 && cal4 < cal2 && cal4 < cal3){
        Minimo = Math.min (cal1, cal2, cal3, cal4);
        Promedio = (cal1 + cal3 + cal2) /3;
        ImprimirInformacion2.innerText = "La calificacion minima es " + Minimo;
        ImprimirInformacion.innerText = "El promedio es " + Promedio;
    }


}