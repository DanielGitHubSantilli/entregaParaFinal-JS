const titulo2 = document.createElement("h2");
const textoTitulo2 = document.createTextNode("Título creado para prácticar con DOM");


let texto ="Hola. Soy Daniel Santilli. Te felicito por haber adquirido este software."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"

const titulo = document.getElementsByClassName("animate__animated animate__flash");

titulo.innerText ="animate__animated animate__flash"

console.log(document.getElementsByTagName("li")) 


console.log("********************ELEMENTOS DEL DOCUMENTO***********************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{
    console.log(document.getSelection().toString());
},4000)
console.log("********************MÉTODOS DEL DOM PARA PODER CAPTURARN ELEMENTOS DEL DOCUMENTO HTML EN VARIABLES JAVASCRIPT***********************");
console.log("********************MÉTODOS QUE YA NO SE UTILZAN***********************");
console.log("********************DEVUELVEN UNA COLECCIÓN DE HTML***********************");
console.log('********************document.getElementsByTagName("li");***********************');
console.log('********************document.getElementsByClassName("nombreclase");***********************');
console.log('********************document.getElementsByName("nombre");***********************');
console.log('********************document.getElementsById("menu");***********************');
console.log("********************MÉTODOS QUE SE UTILZAN***********************");
console.log('********************"QuerySelector y QuerySelectorAll devuelven node list***********************')
console.log('********************document.querySelector("id,clase,etiqueta HTML se debe poner el punto(referido a la clase, o el # referido al ID");***********************');
console.log('********************document.querySelector("QuerySelector trae al primer selector");***********************')
console.log('********************document.querySelectorAll("QuerySelector All trae a todos los elementos");***********************')
console.log('********************document.querySelector("id,clase,etiqueta HTML se debe poner el punto(referido a la clase, o el # referido al ID");***********************');
console.log(document.body)
