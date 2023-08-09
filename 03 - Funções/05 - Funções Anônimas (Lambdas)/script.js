//Funções Anônimas (Lambdas)

let numeros = [1, 2, 3, 4, 5, 6]

function dobrar(valor){
    return valor * 2
}

let res1 = numeros.map(dobrar)

console.log(numeros);
console.log(res1);

//função lambda

let re2 = numeros.map(function(valor){
    return valor * 2
}) // a gente passa a function como parâmetro pro map

console.log(re2);

let res3 = function(valor){
    return valor * 2
}

console.log(res3(9));