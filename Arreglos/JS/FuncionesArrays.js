function ArreglosJavascript(){
    //Primer forma de declarar un arreglo
    //Declaro una variable con la palabra reservada new array con un cuadro de 7 posiciones
    var DiasSemana = new Array (7)

    //LLenar la informacion en el arreglo con los indices que comienza con 0
    DiasSemana[0] = "Lunes";
    DiasSemana[1] = "Martes";
    DiasSemana[2] = "Miercoles";
    DiasSemana[3] = "Jueves";
    DiasSemana[4] = "Viernes";
    DiasSemana[5] = "Sabado";
    DiasSemana[6] = "Domingo";

    //Imprimir la informacion del arreglo
    console.log(DiasSemana);
    //Imprimir un dia con su indice
    console.log(DiasSemana[4]);
    //Imprimir todos los dias con su indice
    console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], DiasSemana[3], DiasSemana[4], DiasSemana[5], DiasSemana[6])

    //Segunda forma de declarar un arreglo
    var Semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    
    //Imprimir la informacion del arreglo
    console.log(Semana);
    //Imprimir un dia con su indice
    console.log(Semana[4]);
    //Imprimir todos los dias con su indice
    console.log(Semana[0], Semana[1], Semana[2], Semana[3], Semana[4], Semana[5], Semana[6]);
}