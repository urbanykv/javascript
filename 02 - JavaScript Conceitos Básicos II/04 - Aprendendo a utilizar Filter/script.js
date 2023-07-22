//Aprendendo a utilizar Filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pares(n){
    return n % 2 === 0
}

console.log(pares(2));

function impares(n){
    return n % 2 !== 0
}

console.log(impares(3));


//Filtrando apenas os pares
var ret = numeros.filter(pares) 
console.log(ret);


//Filtrando apenas os impares
var ret = numeros.filter(impares) 
console.log(ret);

