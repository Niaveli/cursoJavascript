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

// Un programa que me muestre el factorial de un número
5!=4*3*2*1
5!=120

7!=7
//hacer un programa que me determine si un texto es un palimdromo


//hacer un programa que me muestre los n numeros de la serie 
//de fibonacci
1-2-3-5-8-13