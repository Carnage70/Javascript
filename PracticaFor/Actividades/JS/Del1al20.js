function EventListener(){
    document.getElementById("click").addEventListener("click", Serie());
}

function Serie(){

    var salida = document.getElementById("lista");

    salida.innerText = "";

    for(var x=1; x<=20; x++){

        var lista = document.createElement("li");

        lista.setAttribute("class", "list-group-item");

        lista.innerText = x

        salida.appendChild(lista)
    }
}