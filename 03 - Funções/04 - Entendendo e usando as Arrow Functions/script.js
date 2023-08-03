//Entendendo e usando as Arrow Functions


// Forma 1

function sub(n1, n2){
    return n1 - n2
}

console.log(sub(5,6));

// Forma 2

const somar = function(n1, n2){
    return n1 + n2
}

console.log(somar(4, 6));

// Forma 3

const subAlternativo = sub

console.log(subAlternativo(3, 5));

// Arrow Function

const multi = (num1, num2) => {
    return num1 * num2
}

console.log(multi(2, 6));

/*
Atenção:
Caso a sua função tenha apenas 1 parâmetro de entrada,
e, executa apenas uma linha, você pode simplicar ainda mais usando Arrow Function
*/

const dobrar = valor => valor * 2;

console.log(dobrar(5));

const mensagem = () => 'Evolua seu lado Geek';

console.log(mensagem());