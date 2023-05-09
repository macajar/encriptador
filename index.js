function encriptar(){
    let texto=document.getElementById("texto").value;
    let titulomensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco=document.getElementById("muñeco");
    let textocifrado=texto
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat")


    if (texto.length !=0){
        document.getElementById("resultado").textContent=textocifrado;
        titulomensaje.textContent="Título cifrado exitosamente";
        parrafo.textContent="";
        muñeco.src="";
    } else { muñeco.src="Muñeco.png";alert("ingrese texto");document.getElementById("resultado").textContent="";titulomensaje.textContent="Ningún mensaje encontrado"}
}


function desencriptar(){
    let texto=document.getElementById("texto").value;
    let titulomensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco=document.getElementById("muñeco");
    let textocifrado=texto.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");

    if (texto.length !=0){
        document.getElementById("resultado").textContent=textocifrado;
        titulomensaje.textContent="Título cifrado exitosamente";
        parrafo.textContent="";
        muñeco.src="";
    } else { muñeco.src="Muñeco.png";alert("ingrese texto"); titulomensaje.textContent="Ningún mensaje encontrado";parrafo.textContent="Ingrese texto a encriptar o desencriptar";document.getElementById("resultado").textContent=""}
}


function copytext() {
    // Get the text field
    var copyText = document.getElementById("resultado");
  
    // Select the text field
    copyText.select;
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
  }