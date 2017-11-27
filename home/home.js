var home={
    eventi:[],
    giornoOdierno : "13",
    path:"ciao.jpg",
    baseurl: "https://ilclub-e17b5.firebaseio.com/",
    init:function(){

        var url = home.baseurl + 'Eventi.json';
        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json',
        }).done(home.onInitSuccess).fail(home.onInitError);
        home.eventHandler();

    },
    onInitSuccess:function(data){
        
        if(data!=null){
            for (var idx in data) {
                home.eventi.push(data[idx]);
             }
            console.log("Preso!");
            console.log("Success "+data);
        }
        else{
            home.eventi=[];
            console.log("NON preso");
            console.log(data);
        }

        home.scriviEventi(home.giornoOdierno);
    
    },

    onInitError:function(e){
        alert('Errore Init: ' + e.message);
    },

    eventHandler:function(){
        $("#newEvent").click(function(){
            window.location.href = "../new_event.html";
        })
        $("#logout").click(function(){
            window.location.href = "../login.html";
        })
        $(".giorno").click(home.giornoSelezionato);
    },

    scriviEventi:function(giorno){
        //console.log("Scrivi:");
        //console.log(home.eventi);
        var eventoLI ="";
        for(var idx in home.eventi){
            var evento = home.eventi[idx];            
            var data = evento.data;
            //console.log("Data "+data);
            var numero = data.split("-");
            numero = numero[2];
            //console.log("Giorno "+numero);

            if(parseInt(numero)>=parseInt(giorno)){
                eventoLI += "<div class='EventiUtente'><div class='col-9'><p>"+evento.titolo+"</p>"+
                "<p>"+evento.data+"</p> <p>"+evento.sede+"</p></div>"+
                "<div class='col-3' data-img='"+evento.immagine+"'></div></div>";
                //<img src='"+evento.immagine+"'>
                //console.log(eventoLI);
            }
        }

        $("#boxEventi").html(eventoLI);
        $(".EventiUtente .col-3").each(function(){
            console.log($(this).data("img"));
            $(this).css("background-image", "url('"+$(this).data("img")+"')");
        });
    },
    giornoSelezionato:function(){

        var giorno = $(this).text();
        home.scriviEventi(giorno);
    }

}

$(document).ready(home.init());





