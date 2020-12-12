function EjercicioVariables(){

    //Se crea una variable de tipo false
    //var mayorde25 = false;
    //Se crea un variable inexistente
    //var mayorde25 = otravariable;
    //La alerta de imprimir resultado
    //alert("Mostrar un mensaje que no se ejecuta");

    //Se declara una variable booleana 
    //var foco = false;

    // if (foco == false){
    //  alert("El foco esta encendido");
    //} else{
    //  alert("El foco esta apagado");
    //    }

    // if (foco == true){
    //  alert("El foco esta encendido");
    //} else{
    //  alert("El foco esta apagado");
    //}

    var a=1, b=2, c=3;
    var casado = true;
    var mayorde25 = false;
    var texto1 = "En un lugar de la mancha";

    console.log("La variable casado vale" + " " + casado);
    console.log("La variable de mayor de 25 vale" + " " + mayorde25);
    //El booleano true se convierte en 1 para poder multiplicar
    console.log("La multiplicacion de los numeros es" + " " +(casado * 5));
    //El booleano false se convierte en 0 para poder multiplicar
    console.log("La multiplicacion del false es" + " " + (mayorde25 * 5));
    //La variable casado vale true por que no le hemos hecho un cambio
    console.log("La variable casado ahora vale" + " " + casado);
    console.log("La variable mayorde25 ahora vale" + " " + casado);
    //Sumar las variables
    console.log("La suma de los numeros es:" + " " + (a + b + c));
    //Multiplicar frases con numeros imprime un NaN, que significa que no es un numero
    console.log("Que obtenemos multiplicando texto con un numero" + " " + (texto1 * 1));

    //toString - se encarga de convertir el dato en texto o  una frase
    console.log("Mostramos lo equivalente de true en texto" + " " + casado.toString());
    console.log(texto1.toString());

    var arreglo = ["Quiero", "Aprender"];
    console.log(arreglo.toString());

    //Imprimir el numero 
    console.log(a.toString() + b.toString());
    console.log(b.toString() + c.toString());
    console.log(c.toString() + a.toString());

    //Suma a + b
    console.log(a + b);
}