//Quiere comparar si una persona es mayor de edad y si tiene la INE y ya puede ingerir alcohol

// //Es un metodo que se agrega para utilizar una funcion para el boton
// EventListener();

function EventListener(){
    //obtiene el id del boton que esta en el html y va a estar atento cuando le de click al boton
    document.getElementById("CalcularEdad").addEventListener("click", CalcularEdad());
}

function CalcularEdad()
{
    //Obtener el id del input, pero con el .value obtenemos lo que ingresamos en el input.
    //Number oindica que tipo de variable es
    var edad = Number(document.getElementById("edad").value);
    //Se declara otra variable para leer el valor del input ine
    var Ine = Number(document.getElementById("INE").value);
    //Se crea una variable para imprimir la informacion
    var ImprimirInformacion = document.getElementById("ImprimirEdad");

    if( edad >= 18 && Ine==1){
        //InnerText lo que hace es mandar llamar al html e imprimir el resultado
        ImprimirInformacion.innerText = "La persona es mayor de edad y puede tomar";
    }else if(edad >=18 && Ine==0){
        ImprimirInformacion.innerText = "La persona es mayor de edad, pero como no tiene ine no puede tomar"
    }else if(edad <18 && Ine==0){
        ImprimirInformacion.innerText = "La persona es menor de edad y no puede tomar"
    }
}