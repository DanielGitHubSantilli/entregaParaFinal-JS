
const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"

const enviar = document.getElementById("enviar")
enviar.addEventListener("click", alert("Página de Contacto"))

const texto ="Hola. Estás en la sección de Contacto."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
hablar(texto)

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(JSON)

localStorage.setItem("Bienvenido","Usuario Nuevo")
let usuario = localStorage.getItem("Bienvenido")
console.log(usuario)

let formulario= document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario(elemento){
  elemento.preventdefault();
  console.log("formulario enviado");
}
// Crear un array vacío
var datos = [];

// Crear una función que recibe los datos como parámetros
const DNI = document.getElementById(iDNI);
const nombre = document.getElementById(iNombre);
const apellido = document.getElementById(iApellido);
const telefono = document.getElementById(iTelefono);
const email = document.getElementById(iemail);
const Sugerencias= document.getElementById(tSugerencias);
function agregarDatos(DNI, Nombre, Apellido, telefono, email, Sugerencias) {


  // Crear un objeto con los datos
  const persona = {
    dni: DNI,
    nombre: Nombre,
    apellido: Apellido,
    telefono: telefono,
    email: email,
    sugerencias: Sugerencias
  };
  // Añadir el objeto al final del array
  datos.push(persona);


// Crear un botón que llama a la función con los valores de los inputs
const botonEnviar = document.getElementById("enviar");
boton.addEventListener("click", function() {
  // Obtener los valores de los inputs
  const dni = document.getElementById("iDni").value;
  const nombre = document.getElementById("iNombre").value;
  const apellido = document.getElementById("iApellido").value;
  const telefono = document.getElementById("iTelefono").value;
  const email = document.getElementById("iEmail").value;
  const sugerencia = document.getElementById("iSugerencia").value;
  // Llamar a la función con los valores
  agregarDatos(dni, nombre, apellido, telefono,email,sugerencia);
  //console.log(boton)
//botonEnviar.addEventListener("click","agregarDatos")
console.log("Se ha guardado el formulario")

})
}

//***************************************++ */

//const botonEnviar = document.getElementById("enviar")


const botonCancelar = document.getElementById("cancelar")
botonCancelar.addEventListener("click","cancelarFormulario")
console.log("Se ha cancelado el envío del formulario")

function enviarFormulario(DNI,nombre,apellido,telefono,email){
    DNI=DNI,
    nombre=nombre,
    apellido=apellido,
    telefono=telefono,
    email=email

//guardar en console.table

}
function cancelarFormulario(){

}