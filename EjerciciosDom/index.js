//let newelement= documentos .createElement("h1")
//document.body.appendChild(newelement).innertext='hola'

let elementoPadre=document.querySelector('#contenido')
let elementoHijo=document.createElement("h1")
let nuevoElemento=elementoPadre.appendChild(elementoHijo)
nuevoElemento.innerText='hola alumnitos'



