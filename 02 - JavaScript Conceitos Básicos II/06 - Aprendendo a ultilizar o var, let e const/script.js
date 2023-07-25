//Aprendendo a utilizar o var, let e const


//Var - Escopo Global
var numero = 42;
console.log(numero);

numero = numero + numero;
console.log(numero);

//Let - Escopo Local
let outroNumero = 42;
console.log(outroNumero);

outroNumero = outroNumero + outroNumero;
console.log(outroNumero);

let nome = 'Geek';
console.log(nome);

nome = 'University';
console.log(nome);

for(let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
} // a variável let só é reconhecida aqui dentro dessa chave, é como se ela n existisse fora desse for.

// outro pq de usar let

var num = 80;
console.log(num);

var num = 30;
console.log(num);

// a msm situação no let
/*let n = 30;
 console.log(n);

let n = 20;
console.log(n);*/ // Não é possivel declarar duas lets diferentes com o msm nome.

//Vamos usar apenas let daqui para frente.

//Const - Constante

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

/*TAXA = 5; // Erro, pois pelo fato de ser uma const, não é possivel ela variar.
console.log(TAXA);*/

const curso = {nome: 'Programação em JavaScript'};
console.log(curso.nome);

// Lembrando que não podemos variar uma const, mas pode ocorrer uma mutação nos dados contigos na const.

curso.nome = 'Programação em Python'; // Mutação
console.log(curso.nome);

/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? então let.
- A variável será constante? então const.
*/