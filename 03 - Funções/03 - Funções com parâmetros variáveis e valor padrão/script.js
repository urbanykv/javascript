//Funções com parâmetros varáveis e valor padrão

function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar()); // 0
console.log(somar(5)); // 5
console.log(somar(2, 5)); // 7
console.log(somar(3, 6)); // 9

//arguments é o parâmetro da function.

function imprimeValores(papel, tesoura){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
imprimeValores()
imprimeValores(4, 6)

// Gambiarra 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

console.log(somar2());
console.log(somar2(10, 5));
console.log(somar2(0, 2, 5));

//Gambiarra 2

function somar3(n1, n2, n3){
    n1 = isNaN(n1) ? 1 : n1;
    n2 = isNaN(n2) ? 2 : n2;
    n3 = isNaN(n3) ? 3 : n3;

    return n1 + n2 + n3;
}

console.log(somar3());

//Hj em dia n é mais necessário fazer dessa forma pra ter um valor padrão.

function somar4(num1 = 7, num2 = 3, num3 = 5){
    return num1 + num2 + num3;
}

console.log(somar4());