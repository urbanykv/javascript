//Aprendendo a utilizar Reduce

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}; // Somando os valores usando for
console.log(soma);

soma = 0;

precos.forEach(function(valor){
    return soma += valor;
}); // Somando os valores usando forEach

console.log(soma);

function somar(anterior, atual){
    return anterior + atual
};

var ret = precos.reduce(somar); // Somando os valores usando .reduce (ele reduz o array usando os paramêtros anterior e atual no array precos, somando o anterior e o atual até finalizar a array inteira.)
console.log(ret);