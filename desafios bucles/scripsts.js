/* 1 Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.log
imprima todos los valores impares del 1 al 20.*/
for(i=0;i<=20;i++){
    console.log(i)
}

/* 2 Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.log
imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.*/
for(i=100; i>-1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

/*  3. Imprime la secuencia Usando un bucle, escribe un código que haga que console.log 
imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.*/
for(i=4; i>-4; i-=1.5) {
    console.log(i);
}
/*  4. Imprime la secuencia Usando un bucle, escribe un código que haga que console.log 
imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.*/
var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

/*  5. Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, console.logdé
 como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.*/
var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);