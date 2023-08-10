var segundos =30;
var resultado = 0;
var pregunta1 = ["manzana", "sandia", "melon", "banano", "naranja"];
var pregunta2 = ["zanahoria", "lechuga", "aguacate", "pepino", "cebolla"];
var pregunta3 = ["perro", "gato", "conejo", "hamster", "tortuga"];
var pregunta4 = ["football", "basketball", "tenis", "volleyball", "baseball"];
var pregunta5 = ["amarillo", "verde", "morado", "anaranjado", "negro"];

function Empezar(){
    document.getElementById("enviar").disabled = false;
    document.getElementById('contadorp').innerHTML = "Le quedan " + segundos + " segundos";
    if(segundos == 0)
    {
        alert("Tiempo Agotado")
        document.getElementById("enviar").disabled = true;
    }
    else
    {
        segundos --;
        setTimeout("Empezar()", 1000);
    }
}

function reintentar()
{  
    document.getElementById("formulario");
    formulario.reset();
    segundos = 30;
    document.getElementById("enviar").disabled = false;
    Empezar();
}

function btnenviar(){
    resultado = 0;
    if(pregunta1.includes(document.getElementById("preg1").value))
    {
        resultado++;
    }
    if(pregunta2.includes(document.getElementById("preg2").value))
    {
        resultado++;
    }
    if(pregunta3.includes(document.getElementById("preg3").value))
    {
        resultado++;
    }
    if(pregunta4.includes(document.getElementById("preg4").value))
    {
        resultado++;
    }
    if(pregunta5.includes(document.getElementById("preg5").value))
    {
        resultado++;
    }
    if(resultado == 5)
    {
        alert("Todas las respuestas son correctas   " + "   Respuestas: pregunta 1: " + document.getElementById("preg1").value + " pregunta 2: " + document.getElementById("preg2").value + " pregunta 3: " + document.getElementById("preg3").value + " pregunta 4: " + document.getElementById("preg4").value + " pregunta 5: " + document.getElementById("preg5").value)
    }
    else
    {
        alert("incorrecto, tiene " + resultado + " respuestas correctas   " + "   Respuestas: pregunta 1: " + document.getElementById("preg1").value + " pregunta 2: " + document.getElementById("preg2").value + " pregunta 3: " + document.getElementById("preg3").value + " pregunta 4: " + document.getElementById("preg4").value + " pregunta 5: " + document.getElementById("preg5").value)
    }
}