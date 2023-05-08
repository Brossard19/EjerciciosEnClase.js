
let dibujar = formarTriangImpar() 

function formarTriangImpar (num) {
let aviso = alert(`Hola. Este programa puede formar un triangulo rectangulo de numeros impares.`)
num = prompt(`Ingresar un numero :`)
let i;
let c = "";
for (i=1;i<=num;i++) {
    if(i%2!=0) {
        c =  i + " " + c
        console.log(c) 
    } 
}
}