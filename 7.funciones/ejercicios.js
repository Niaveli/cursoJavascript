//EJERCICIOS:
 //1. contarVocales('eucalipto')//5
function contarVocales(texto){
    let contarVocales =0
    let vocales=['a','e','i','o','u']
    for (let i= 0; i<texto.length; i++){
        if (vocales.indexOf(texto[i])>=0)
        ++contarVocales;
    }
    return contarVocales;
}
console.log(contarVocales('eucalipto'));
console.log(contarVocales('tomate'));
console.log(contarVocales('diamantes'));

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


