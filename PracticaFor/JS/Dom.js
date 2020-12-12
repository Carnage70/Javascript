function EventListener(){
    //Mandar llamar al boton1
    document.getElementById("click").addEventListener("click", DarleClick());
    //Mandar llamar al boton2
    document.getElementById("click2").addEventListener("click", DarleClick2());
    //Boton 3
    document.getElementById("click3").addEventListener("click", DarleClick3());
}
//La funcion primer boton
function DarleClick(){
    var salida = document.getElementById("salida1");

    //document.createelement se utiliza para crear una etiqueta desde javascript
    var button = document.createElement("button");

    //La instruccion set attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2"); // = class"btn btn-primary btn-lg btn-block mt-2"
    button.setAttribute("id", "button"); // = id="boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.setAttribute("onclick", "click2()"); // = onclick=("click2()")

    //Se utiliza para imprimir informacion en la etiqueta(boton);
    button.innerText = "Boton Impreso";

    //Se utiliza para imprimir el boton creado
    salida.appendChild(button);
}

//La funcion del segundo boton
function DarleClick2(){
    
    var salida2 = document.getElementById("salida2");

    for(var x=0; x<5; x++){

        //se crea un elemento en javascript
        var boton = document.createElement("button");
        //Se crean los atributos del boton
        boton.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2"); // = class"btn btn-primary btn-lg btn-block mt-2"
        boton.setAttribute("id", "click"); // = id="boton"
        boton.setAttribute("type", "button"); // = type = "button"
        boton.setAttribute("onclick", "click2()"); // = onclick=("click2()")

        //Se le agrega un texto al boton
        boton.innerText = "Varios botones impresos";

        //Se utiliza para imprimir el boton creado
        salida2.appendChild(boton);
    }
}

function DarleClick3(){

    var salida3 = document.getElementById("lista");
    //
    salida3.innerText = "";
    //del 0 al 5 
    for(var x=0; x<=5; x++){
        //se crea un elemento
        var lista = document.createElement("li"); //<li></li>
        //crear los atributos
        lista.setAttribute("class", "list-group-item");//<li class="list-group-item"></li> 
        //empezar a imprimir la lista desde el "0" al "5"
        lista.innerText = x;

        salida3.appendChild(lista);
    }
}
