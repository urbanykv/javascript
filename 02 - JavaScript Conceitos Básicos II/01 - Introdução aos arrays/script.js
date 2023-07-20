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

familia.splice(7, 1) // A partir do índice 3 deleta 1 elemento

console.log(familia);