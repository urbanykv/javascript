//First Class Citizens

function somar(n1, n2){
    return n1 + n2;
}

//Exemplo 1
let res = somar(5,6);
console.log(res);

//Exemplo 2
const exec = somar;
console.log(exec(8, 7));

function sub(n1, n2){
    return n1 - n2;
}

function fazAlgo(n1, n2, funcao){
    return funcao(n1, n2);
}

console.log(fazAlgo(5, 5, somar));
console.log(fazAlgo(5, 5, sub));