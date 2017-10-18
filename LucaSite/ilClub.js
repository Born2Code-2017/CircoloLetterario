var Tris = function(){
    var id = 1; //1 o -1
    var PartitaFinita = false;
    var vincitore = 0;
    var numMosse = 0;
    const MaxNumMosse = 9;
    var campo = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var trisCaptation;
    this.init = function(){
        id = 1;
        trisCaptation = document.getElementById('trisCaptation');
    }
    /**
     * eseguiMossa registra, se valida la mossa dell'utente, controlla se la partita è finita
     * e se c'è un vincitore
     * @param {Number} x numero della colonna
     * @param {Number} b numero della riga
     */
    this.eseguiMossa = function(x, y){
        if(PartitaFinita===false)
        {
            if(campo[x][y] === 0)     
            {
                campo[x][y]=id;
                var casella = document.getElementById('row'+(x+1)+'cel'+(y+1));
                casella.innerHTML = id === 1 ? '<img src="Xicon.svg"></img>' : '<img src="Oicon.png"></img>';
                this.numMosse++;
                this.PrintStato();
                checkWin();
                SwitchCurrentUser();
            }
            else
            {
                console.log('mossa non valida!');
                trisCaptation.style.color = "gold";                
                trisCaptation.innerHTML = 'Mossa non valida! Turno del giocatore ' + (id === 1 ? 1 : 2);;
            }
        }        
    }

    this.PrintStato = function(){
        for(row=0; row < campo.length; row++)
        {
            let riga = '';
            for(i=0; i < campo[row].length; i++)
                riga = riga + ' ' + campo[row][i];
            console.log(riga);
        }
        console.log('');
    }
    var checkWin = function(){
        for(row=0; row < campo.length; row++)
        {
            var diag1=0;
            var diag2 = 0;
            var sommaRiga = 0;
            var sommaColonna = 0;
            var maxRowindex = campo.length-1;
            for(col=0; col < campo[row].length; col++)
            {
                sommaRiga += campo[row][col];
                sommaColonna += campo[col][row]; //inverto
                diag1 += campo[col][col];
                diag2 += campo[maxRowindex - col][col];
            }
            if(sommaRiga === 3 || sommaColonna === 3 || diag1 === 3 ||  diag2 === 3)
            {
                console.log('Utente 1 ha vinto');
                PartitaFinita = true;
                vincitore = 1;
                trisCaptation.style.color = "darkred";
                trisCaptation.innerHTML = 'Il giocatore 1 ha vinto!';
                return;
            }
            else if(sommaRiga === -3 || sommaColonna === -3 || diag1 === -3 ||  diag2 === -3)
            {
                console.log('Utente 2 ha vinto');
                PartitaFinita = true;
                vincitore = 2;
                trisCaptation.style.color = "darkred";
                trisCaptation.innerHTML = 'Il giocatore 2 ha vinto!';
                return;
            }
        } 

    }
    /**
     * GetCurrentUser restutuisce l'utente corrente della partita
     * @return {Number} utente corrente
     */
    this.GetCurrentUser = function(){
        return id;
    }
    /**
     * GetMosseRimanenti restutuisce ul numero delle mosse rimanenti 
     * @return {Number} mosse rimanenti
     */
    this.GetMosseRimanenti = function(){
        return MaxNumMosse-numMosse;
    }

    var SwitchCurrentUser = function(){
        if(PartitaFinita===false)
        {
            if(this.numMosse == MaxNumMosse)
                this.PartitaFinita = true;
            else
            {
                id === 1 ? id = -1 : id = 1;            
                trisCaptation.style.color = "black";
                trisCaptation.innerHTML = 'Turno del giocatore ' + (id === 1 ? 1 : 2);
            }
        }
    }
}

var mossa = new Tris();
mossa.init();
/*
console.log('Utente: '+ mossa.id);
mossa.eseguiMossa(0, 0);//1
//console.log('Utente corrente: '+ mossa.GetCurrentUser());
mossa.eseguiMossa(0, 1);//2
mossa.eseguiMossa(1, 1);//1

mossa.eseguiMossa(1, 2);//2
mossa.eseguiMossa(2, 2);//1
*/