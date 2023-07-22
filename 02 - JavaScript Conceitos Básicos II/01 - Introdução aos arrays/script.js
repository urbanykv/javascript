//Introdução aos arrays
var familia = ['Matheus', 'Giulia', 'Ismael', 'Timóteo', 'Amanda', 'Bianca']

var alunos = Array('Matheus', 'Pedro', 'Rafael', 'Tito', 'Love', 'Beatriz')

var cliente = {
    nome: 'Nome: Matheus Urban',
    idade:'Idade: ' + 21,
    peso: 'Peso: ' + 98,
    altura: 'Altura: ' + 1.75,
    cpf: 'CPF: ' + 51906993823
}

console.log(cliente.nome);
console.log(cliente.idade, cliente.peso);
console.log(cliente.altura, cliente.cpf);


console.log(familia);
console.log(alunos);

/* Detalhes sobre arrays
- Possuem tamanho infinito
- Podemos colocar qualquer tipo de dado
*/

//Criando um array vazio
var dados = [];
console.log(dados);

//Fazendo acesso ao valor de um índice
console.log(familia[0]);

//Alterando o valor a partir do índice
alunos[3] = 'Tainá';
console.log(alunos);

//Atenção ao acessar um valor com um índice que não existe
familia[6] = 'Pablo';
console.log(familia);
console.log(familia[6]); // Pablo
console.log(familia[7]); // Undefined

console.log(familia[7] == undefined);

if(familia[7] == undefined){
    familia[7] = 'Lavignia';
    console.log(familia);
}

console.log(familia[7] == undefined);

//Inserindo elementos no final do array

var nomes = ['Juliana', 'Erismar', 'Danilo'];
console.log(nomes);

nomes.push('Gabriel'); // insere o valor no final do array
console.log(nomes);

//Tamanho do array
console.log(nomes.length); // 4

//Ordenar os dados de um array

nomes.sort(); // Ordenando array de strings (.sort() é apenas para Strings)
console.log(nomes);

var precos = [123.55, 42.27, 546.99, 23.12];

precos.sort(function(a, b){return a - b;});
console.log(precos); //Ordenando array de float

//Deletanto dados de um array

delete familia[7]; // deletando dados de um array (sobra empty item)

console.log(familia);

familia[7] = 'Felicia'
console.log(familia);

familia.splice(7, 1) // A partir do índice 7 deleta 1 elemento

console.log(familia);

familia.splice(7, 0 , 'Julia') // A partir do índice 7 não delete nenhum, mas adicione 'Julia'


familia.splice(7, 1, 'Juliana')
console.log(familia);

//Iterar em um array

for(var i = 0; i < precos.length; i++){
    console.log(precos[i]);
}

//Removendo elementos do final do array
precos.pop();
console.log(precos);

var umDoisTres = precos.pop();
console.log(umDoisTres);
console.log(precos);

//Removendo elemento inicial do array
var inicial = precos.shift();
console.log(inicial);

//Inserindo elementos no inicio de um array
var inicial = precos.unshift(53.4);
console.log(precos);

//Retorna um novo array a partir do índice informado
var novo = precos.slice(0, 1); // a partir do índice 0, pegue até o índice 1 sem inclui-lo
console.log(novo); // [53.4]

var pares = [2, 4, 6, 8, 10]
var impares = [1, 3, 5, 7, 9]

var juntar = pares.concat(impares)// concatena as duas arrays (a ordem altera conforme a forma q vc concatena, exemplo: impares.concat(pares) iria resultar em um array com a array de impares no inicio e pares no final.)
console.log(juntar);

juntar.sort(function(a, b){return a - b;});
console.log(juntar);

// 4 x 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

console.log(tabuleiro [0] [3]);