function EventListener(){
    document.getElementById("click").addEventListener("click", Serie());
}

function Serie(){

    var salida = document.getElementById("lista");

    salida.innerText = "";

    for(var x=10; x<=20; x=x+2){

        var lista = document.createElement("li");

        lista.setAttribute("class", "list-group-item");

        lista.innerText = x

        salida.appendChild(lista)
    }
}