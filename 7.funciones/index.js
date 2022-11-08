//Las funciones son la solución a todos estos problemas, tanto en 
//JavaScript como en el resto de lenguajes de programación. Una función es 
//un conjunto de instrucciones que se agrupan para realizar una tarea concreta
// y que se pueden reutilizar fácilmente.
//TIPOS DE FUNCIONES:
 //1. Por declaración: Es probablemente la más utilizada y la más fácil de recordar, sobre todo si ya conoces algún 
      //otro lenguaje de programación.Consiste en declarar la función con un nombre y sus parámetros 
     //de entrada entre paréntesis.
 //2. Por expresión: Este tipo ha tomado popularidad y consiste básicamente en guardar una función en una variable, para así ejecutar 
     //la variable como si fuera una función. Este nuevo recurso ha dado pie a las funciones anónimas.
 //3. Por constructor de objeto: La variante de constructor de objeto es la menos recomendada y casi no se utiliza.
    //Únicamente nos ayuda a recordar que las funcionesMtambién son tipos de objetos en JavaScript.

//arrow function  o funciones flecha

//pasos para construir una functión
//1.Palabra reservada function
//2. ponerle un nombre que describa el trabajo
  //que realizara la funcion
//3. la funcion puede recibir parámetros
  //pero sin o si indicar que tendrá parámetros
  //(listaAmigos)
  //(edad,nombre)
//4.DATO IMPORTANTE. Una funcion siempre tiene que
  //retornar un tipo de dato.
  function saludo(nombre,apellido){
   let saludo='hola como estas '+nombre+' '+apellido
   return saludo
  }
//Para usar una función debo llamar a la funcion
console.log(saludo('ñiaveli','rivera'))
console.log(saludo('Rayda', 'Reyes'))