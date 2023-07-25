//Aprendendo e usando Destructuring

let numeros = [1, 3, 5, 7];

let [num1, num2, num3, num4, num5] = numeros; //desestruturando a array em variáveis

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

//Destructuring com objeto

const produto = {
    nome: "Playstation 4",
    preco: 1678.44
}

const {nome, preco} = produto;

console.log(nome);
console.log(preco);

console.log(`${nome} custa ${preco}`);