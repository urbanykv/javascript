//Objetos vs JSON

/*
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programação em Python',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

console.log(curso); // Objeto JavaScript

// Convertendo Object JavaScript em JSON

const json = JSON.stringify(curso);
console.log(json);// Objeto JSON - Podemos aprender que o Objeto JSON tem um formato diferente, tanto na questão de imprimir quanto no formato de variável msm (ele não é um Object, é uma String.) e n recebe funções como preco() q nós fizemos no objeto do JavaScript, ou seja, ele só recebe textos e números por ser uma string, então é apenas texto. 

/*É importante lembrar disso pq JSON são apenas os dados, funções e qualquer outra coisa q seja fora disso, vai ser removido. */

// Convertendo Object JSON em JavaScript

const obj = JSON.parse(json);
console.log(obj); // Novamente um Objeto JavaScript

const jsonCorrigido = '{ "nome": "Programação em Python", "horas": 27 }';

const novoObjt = JSON.parse(jsonCorrigido)

console.log(novoObjt);