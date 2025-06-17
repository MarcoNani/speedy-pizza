"use strict"

// Seleziona tutti gli elementi con classe "block"
var immagini = document.querySelectorAll('.block');

// Aggiungi un listener a ciascuna immagine per il passaggio del mouse
immagini.forEach(function(immagine) {
  immagine.onmouseover = function() {
    document.getElementById("stato_par").innerHTML = "Sopra = " + "sì";
    console.log("Sopra: sì");

    game_over();

  };
  immagine.onmouseout = function() {
    document.getElementById("stato_par").innerHTML = "Sopra = " + "no";
    console.log("Sopra: no");

  };
});



function game_over() {
  clearInterval(t);

  // mostro l'overlay game over
  var overlay_g_o = document.getElementById('overlay_game_over');
  overlay_g_o.style.display = 'block';

  // mostro il punteggio
  var punteggio = document.getElementById('punteggio');
  punteggio.innerHTML = "Punteggio: " + pt;
}

function rigioca() {
  location.reload();
}

function hai_vinto() {
  clearInterval(t);

  // mostro l'overlay game over
  var overlay_g_o = document.getElementById('overlay_game_over');
  var titolo_g_o = document.getElementById('title_g_o');

  titolo_g_o.innerHTML = "Hai vinto!";
  overlay_g_o.style.display = 'block';

  // mostro il punteggio
  var punteggio = document.getElementById('punteggio');
  punteggio.innerHTML = "Punteggio: " + pt;

  // mostro il tempo
  var tempo_g_o = document.getElementById('tempo_g_o');
    tempo_g_o.innerHTML = "Tempo: " + tempo_timer;
}

function rigioca() {
  location.reload();
}




// timer
let tempo_timer = 90;
let t;
function start() {
  t = setInterval(scalaT_renderizza, 1000);
}

function scalaT_renderizza() {
  tempo_timer--;

  // controllo se il tempo è scaduto
  if (tempo_timer == 0) {

    document.getElementById("timer").innerHTML = "Tempo scaduto!";
    game_over();
  }

  document.getElementById("timer").innerHTML = tempo_timer;
}

window.onload = function() {
  start();
};


// riconoscimento di cosa si va sopra

// Seleziona tutti gli elementi con classe "pizzeria"
var pizzeria = document.querySelectorAll('.pizzeria');
pizzeria.forEach(function(immagine) {
  immagine.onmouseover = function() {
    console.log("Sopra pizzeria: sì");
    sequenza(0);
  };
  immagine.onmouseout = function() {
    console.log("Sopra pizzeria: no");
  };
});

// Seleziona tutti gli elementi con classe "g_1"
var g_1 = document.querySelectorAll('.g_1');
g_1.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(1);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_2"
var g_2 = document.querySelectorAll('.g_2');
g_2.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(2);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_3"
var g_3 = document.querySelectorAll('.g_3');
g_3.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(3);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_4"
var g_4 = document.querySelectorAll('.g_4');
g_4.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(4);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_5"
var g_5 = document.querySelectorAll('.g_5');
g_5.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(5);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_6"
var g_6 = document.querySelectorAll('.g_6');
g_6.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(6);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_7"
var g_7 = document.querySelectorAll('.g_7');
g_7.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(7);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_8"
var g_8 = document.querySelectorAll('.g_8');
g_8.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(8);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_9"
var g_9 = document.querySelectorAll('.g_9');
g_9.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(9);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_10"
var g_10 = document.querySelectorAll('.g_10');
g_10.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(10);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_11"
var g_11 = document.querySelectorAll('.g_11');
g_11.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(11);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_12"
var g_12 = document.querySelectorAll('.g_12');
g_12.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(12);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_13"
var g_13 = document.querySelectorAll('.g_13');
g_13.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(13);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_14"
var g_14 = document.querySelectorAll('.g_14');
g_14.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(14);
  };
  immagine.onmouseout = function() {
  };
});

// Seleziona tutti gli elementi con classe "g_15"
var g_15 = document.querySelectorAll('.g_15');
g_15.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(15);
  };
  immagine.onmouseout = function() {
  };
});

var g_16 = document.querySelectorAll('.g_16');
g_16.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(16);
  };
  immagine.onmouseout = function() {
  };
});

var g_16 = document.querySelectorAll('.g_16');
g_16.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(16);
  };
  immagine.onmouseout = function() {
  };
});

var g_17 = document.querySelectorAll('.g_17');
g_17.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(17);
  };
  immagine.onmouseout = function() {
  };
});

var g_18 = document.querySelectorAll('.g_18');
g_18.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(18);
  };
  immagine.onmouseout = function() {
  };
});

var g_19 = document.querySelectorAll('.g_19');
g_19.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(19);
  };
  immagine.onmouseout = function() {
  };
});

var g_20 = document.querySelectorAll('.g_20');
g_20.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(20);
  };
  immagine.onmouseout = function() {
  };
});

var g_21 = document.querySelectorAll('.g_21');
g_21.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(21);
  };
  immagine.onmouseout = function() {
  };
});

var g_22 = document.querySelectorAll('.g_22');
g_22.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(22);
  };
  immagine.onmouseout = function() {
  };
});

var g_23 = document.querySelectorAll('.g_23');
g_23.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(23);
  };
  immagine.onmouseout = function() {
  };
});

var g_24 = document.querySelectorAll('.g_24');
g_24.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(24);
  };
  immagine.onmouseout = function() {
  };
});

var g_25 = document.querySelectorAll('.g_25');
g_25.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(25);
  };
  immagine.onmouseout = function() {
  };
});

var g_26 = document.querySelectorAll('.g_26');
g_26.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(26);
  };
  immagine.onmouseout = function() {
  };
});

var g_27 = document.querySelectorAll('.g_27');
g_27.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(27);
  };
  immagine.onmouseout = function() {
  };
});

var g_28 = document.querySelectorAll('.g_28');
g_28.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(28);
  };
  immagine.onmouseout = function() {
  };
});

var g_29 = document.querySelectorAll('.g_29');
g_29.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(29);
  };
  immagine.onmouseout = function() {
  };
});

var g_30 = document.querySelectorAll('.g_30');
g_30.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(30);
  };
  immagine.onmouseout = function() {
  };
});

var g_31 = document.querySelectorAll('.g_31');
g_31.forEach(function(immagine) {
  immagine.onmouseover = function() {
    sequenza(31);
  };
  immagine.onmouseout = function() {
  };
});





// sequenza
// fare un array contenente tutti i nomi dei prossimi edifici
let destinazioni = ["pizzeria", "municipio", "bar", "rossi", "bianchi", "perico", "riva", "tancredi", "tasso", "polo", "villa duca conte barambani", "piscina comunale", "milesi", "pozzi", "dotti", "caccia", "biella", "brena", "fanti", "alfieri", "pedoni", "carboni", "fantozzi", "filini", "algeri", "ubiali", "dossi", "azzola", "biava", "gatti", "cani", "parco"];
let frase = "Destinazione: ";

let nDestinazioni = 31;
let n = 0;
let volte = 0;
let pt = 0;

function sequenza(edificio) {
  console.log("Sopra a: " + edificio);
  if (edificio == n) {
    let istruzioni = document.getElementById("istruzioni");
    n = n + 3;
    pt++;
    if (n > nDestinazioni) {
      if (volte == 0) {
        n = 1;
      }else if(volte == 1){
        n = 2;
      }else if(volte == 2){
        istruzioni.textContent = "Hai vinto!";
        hai_vinto();
      }
      volte++;
    }
    istruzioni.textContent = frase + destinazioni[n];
  }
}