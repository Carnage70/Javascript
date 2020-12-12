function EventListener(){
    document.getElementById("click").addEventListener("click", Serie());
}

function Serie(){

    var salida = document.getElementById("lista");

    salida.innerText = "";

    for(var x=5; x<=50; x=x+5)
    {
        var lista = document.createElement("li");

        lista.setAttribute("class", "list-group-item");

        lista.innerText = x

        salida.appendChild(lista)
    }
}
// var contador;
// for (contador = 1; contador <= 10; contador++)
// {
//     if (contador % 5 == 0)
//         document.write(contador + " ");
// }