let vestido="rosado"
if(vestido=="rosado"){
    console.log("Me pongo mi vestido rosado para ir a la fiesta ")
}else{
    console.log("Me pongo mi vestido negro y no voy a ir a la fiesta ")
}

//EJERCICIO 1
//Hacer un programa que apartir de una variable edad determine si es mayor o menor.
var edad = 20
if (edad<=23){
console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}
//EJERCICIO 2
//Hacer un programa que almacene en una variablenun paswsword y evalue si el password y evalue si el el 
//password es correcto, imprima un mensaje de bienvenida, si es igual, y en mansaje de error si no lo es.
contraseña="niavelirivera"
password="niavelirivera"
if(contraseña==password){
    console.log("bienvenida")
}else{
    console.log("error")
}
//EJERCICIO 3
//Hacer un programa que almacene los dividendo y divisor numeros si su divisor es cero se deberá mostrar
//un mensaje de error caso contrario imprimirá el resultado de la división.
let dividendo = 40
let divisor = 10
if (divisor ==0){
    console.log("error")
}else{
    console.log(dividendo/divisor)
}

//
numeroMes=2
switch(numeroMes){
    case 1:
        console.log("enero")
        break
    case 2:
        console.log ("febrero")
        break
    case 3:
        console.log ("marzo")
        break
    default:
        console.log("error mes no encontrado")
}
//
numero=6
switch(numero){
    case 1:
        console.log("uno")
        break
    case 2:
        console.log("dos")
    case 3:
        console.log("tres")
        break
    case 4:
        console.log("cuatro")
        break
    case 5:
        console.log("cuatro")
        break
    default:
        console.log("error numero no encontrado")
}
//
letra="i"
switch(letra){
    case "a":
        console.log("Es un vocal")
        break
    case "e":
        console.log("Es una vocal")
        break
    case "i":
        console.log("Es una vocal")
        break
    case "o":
        console.log("Es una vocal")
        break
    case "u":
        console.log("Es una vocal")
        break
    default:
        console.log("No es una vocal")
}
//
letra="e"
switch(letra){
    case "a":case "e":case "i":case "o":case "u":
        console.log('la letra es una vocal')
        break
    default:
        console.log("no es una vocal")
}
