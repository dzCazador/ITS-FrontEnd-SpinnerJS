//funcion javascript para hacer girar una imagen sin parar
var angulo = 0;
function girarImagenPorIntervalo() {
    var imagen = document.getElementById("imgSerphika");
    document.getElementById("btnGirar").disabled=true;
    document.getElementById("btnParar").disabled=false;

    intervalo = setInterval(function() {
        angulo += 90;
        imagen.style.transform = "rotate(" + angulo + "deg)";
    }, 500); 
}

function pararRotacion() {
    document.getElementById("btnGirar").disabled=false;
    document.getElementById("btnParar").disabled=true;
    clearInterval(intervalo); // Detiene el intervalo
    intervalo = null; // Resetea la variable
}
