for(let i=1;i<=20;i++){
    if(i%2==0){
   console.log(i)
    } else{
        console.log(i)
    }
}

let vocales='aeiou'
console.log(vocales[0])
for (let i=1;i<vocales.length;i++){
    console.log(vocales[i])
}

let texto1='hola como estas como te llamas'
let contador1=0
console.log (texto1.length)
for (let i=0;i<texto1.length;i++){
 if(texto1[i]=="a"){
    contador1+=1
 }
}
console.log('tienes',contador1, 'vocales a')
// 

let texto='eucalipto'
let contador=0
for(let i=0;i<texto.length;i++){
if (texto[i]=="a"){
contador+=1
    }
    if (texto[i]=="e"){
        contador+=1
        }
        if (texto[i]=="i"){
            contador+=1
            }
            if (texto[i]=="o"){
               contador+=1
                }
                if (texto[i]=="u"){
                    contador+=1
                    }
}
console.log('tienes', contador, 'vocales')


//EJERCICIOS:
// 1. Un programa que me muestre el factorial de un número
let numer='5'
let total=1
for(let i=1; i<=numer; i++){
    total=total * i;
    console.log(total);
}

// 2.hacer un programa que me determine si un texto es un palimdromo
function palindromo (str){
    for(let i =0 ; i<str.length; i++){
        console.log(str[i] !== str[str.length-0-i])
        if(str[i] !== str[str.length-1-i]){
            return false
        }
    }
    return true
}
palindromo("anita lava la tina")

// 3.hacer un programa que me muestre los n numeros de la serie 
//de fibonacci
let n1= 0;
let n2= 1;
for(let i=0; i<10; i++){
    r= n1+n2;
    n1=n2;
    n2=r
    console.log(r);
}
