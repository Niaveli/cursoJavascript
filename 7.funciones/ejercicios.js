//EJERCICIOS:
 //1. contarVocales('eucalipto')//5

function contarVocales(texto){
    const vocales= "aeiou";
    let cantidadVocales =0
    for(const letra of texto){
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}
console.log(contarVocales("eucalipto"))
console.log(contarVocales("rosa"))
console.log(contarVocales("tomate"))

  
//2. fuction calculadora (num1,num2,operación){retur total}
function calculadora(operacion, x,y){
    let total=0
 if (operacion == "suma") {
    total= x+y
  } else if(operacion == "resta"){
    total= x-y
  } else if(operacion == "multiplicación"){
    total= x*y
  } else if(operacion == "división"){
    total= x/y
  }
  return total
}
console.log(calculadora("resta", 8,4 ))
console.log(calculadora("suma", 8,4 ))
console.log(calculadora("división", 8,4 ))
console.log(calculadora("multiplicación", 8,4 ))


