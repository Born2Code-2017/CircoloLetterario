var eventi=[];
var giornoOdierno = "13";
function init(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState===4 && this.status===200){

            var events= JSON.parse(xhttp.response); 
            console.log('events received');
            eventi = events;
            scriviEventi(giornoOdierno);
        }
    }
    xhttp.open('GET', './eventi.json');
    xhttp.send();
}
function scriviEventi(giorno){

    var evento ="";
    for(i=0; i<eventi.length; i++){
        var data = eventi[i].data;
        var numero = data.split(" ");
        numero = numero[0];

        if(parseInt(numero)>=parseInt(giorno)){
            evento += "<div class='EventiUtente'><div class='col-9'><p>"+eventi[i].titolo+"</p> <p>"+eventi[i].data+"</p> <p>"+eventi[i].sede+"</p> </div><div class='col-3'></div></div>";
        }
    }
    $("#boxEventi").html(evento);
}
function giornoSelezionato(){

    var giorno = $(this).text();
    scriviEventi(giorno);
};

$(document).ready(function(){
    $(".giorno").click(giornoSelezionato);
    init();
});



