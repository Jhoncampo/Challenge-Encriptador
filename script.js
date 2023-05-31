var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munheco = document.querySelector(".contenedormunheco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function validarTexto(){
    let textoEscrito = document.querySelector(".cajatexto").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(textoEscrito===''){
        alert('No se a introducido ningun texto.');
        return true;
    }
    if (!validador || validador.length === 0) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        location.reload();
        return true;
      }
}

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}
function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}
function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}
function ocultarAdelante(){
    munheco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    if(!validarTexto()) {
        var texto = mensaje;
    var textoFinal = "";

    for(var i = 0;i < texto.length;i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
    }
}
function desencriptarTexto(mensaje){
    if(!validarTexto()) {

        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0;i < texto.length;i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "a"
                i = i + 1;
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "e"
                i = i + 4;
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "i"
                i = i + 3;
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "o"
                i = i + 3;
            }
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "u"
                i = i + 3;
            }
            else{
                textoFinal = textoFinal + texto[i]
            }
        }
        return textoFinal;
    }     
}
const btncopiar = document.querySelector(".btn-copiar");
btncopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
})
