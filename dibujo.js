var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    var yi1 = 0;
    var xf1 = 10;
    var yi2 = 300;
    var xf2 = 10;
    var yi3 = 300;
    var xf3 = 290;
    var yi4 = 0;
    var xf4 = 290;

    var colorcito = "#000"
    var colorcito2 = "#FAA"


    for(l = 0; l < lineas; l++) {
        dibujarLinea(colorcito2, 0, yi1, xf1, 300);
        dibujarLinea(colorcito2, 0, yi2, xf2, 0);
        dibujarLinea(colorcito2, 300, yi3, xf3, 0);
        dibujarLinea(colorcito2, 300, yi4, xf4, 300);
        console.log("LINEA " + l);
        yi1 = espacio * l;
        xf1 = espacio * (l + 1);
        yi2 = 300 - ((l-1) * espacio);
        xf2 = espacio * l;
        yi3 = 300 - ((l-1) * espacio);
        xf3 = 300 - (espacio* l);
        yi4 = (l-1) * espacio;
        xf4 = 300 - (espacio* l);
    }

    dibujarLinea(colorcito , 1, 1, 1, ancho-1);
    dibujarLinea(colorcito, 1, ancho-1, ancho-1, ancho-1);
    dibujarLinea(colorcito , 1, 1, ancho-1, 1);
    dibujarLinea(colorcito, ancho-1, ancho-1, ancho-1, 1);

}