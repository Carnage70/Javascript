function EventListener(){
    document.getElementById("persona").addEventListener("click", btn1());
    document.getElementById("comida").addEventListener("click", btn2());
    document.getElementById("videojuegos").addEventListener("click", btn3());
    document.getElementById("música").addEventListener("click", btn4());
}
//-----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

function btn1(){
    var imprimir = document.getElementById("imprimir1");

    var per = {
        Nombre: "César ",
        Apellido: "Araujo",
        Edad: 22,
        Genero: "Hombre",
        Nacionalidad: "Mexicana"
    };
    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(per);
        imprimir.appendChild(lista);
        localStorage.setItem("PERSONA", JSON.stringify(per));
}
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
function btn2(){
    var impr2 = document.getElementById("imprimir2");

    var com ={
        Mexicana: "Enchiladas",
    };
    var lista2 = document.createElement("li");
    lista2.setAttribute("class", "list-group-item");
    lista2.innerText= JSON.stringify(com);
    impr2.appendChild(lista2);
    localStorage.setItem("COMIDA", JSON.stringify(com));
}
//-------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

function btn3(){
    var impr3 = document.getElementById("imprimir3");

    var videojuegos = {
        Juego: "Maximo",
    };
    var lista3 = document.createElement("li");
    lista3.setAttribute("class", "list-group-item");
    lista3.innerText= JSON.stringify(pelis);
    impr3.appendChild(lista3);
    localStorage.setItem("PELICULAS", JSON.stringify(pelis));
}
//--------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

function btn4(){
    var impr4 = document.getElementById("imprimir4");

    var musica ={
        Rock: "Nirvana",
   
    };
    var lista4 = document.createElement("li");
    lista4.setAttribute("class", "list-group-item");
    lista4.innerText= JSON.stringify(musica);
    impr4.appendChild(lista4);
    localStorage.setItem("MUSICA", JSON.stringify(musica));
}