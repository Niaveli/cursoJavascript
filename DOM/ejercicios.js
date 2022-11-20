//TEXTO
const elementoh1 = document.createElement("h1")
elementoh1.setAttribute("class","título");
elementoh1.textContent= "Hola, mundo";
console.log(elementoh1.textContent);


//BUTTON
function fbtnon(){
    document.getElementById("btnon").innerHTML='Bienvenido'
}
