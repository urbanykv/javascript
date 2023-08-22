//Anotações e Resumindo algumas coisas

//Quebra de linha (\n)
console.log('Paralelepipedo \n rapa');

let numero = [1, 5, 6,]

numero.map // cria um array com o msm lenght com alterações ditas por uma function.

numero.lenght // comprimento do array.

numero.reduce // reduz o array usando em base o pedido de uma function.

numero.forEach // significa para cada, ou seja, para cada informaçção da array, ocorre uma função, usando em base (óbvio) function.

numero.filter // filtra os dados de uma variável usando uma function como parâmetro.

numero.push // insere o valor no final do array

numero.pop();// removendo elementos do final do array

numero.shift(); // removendo elemento inicial do array

//Inserindo elementos no inicio de um array
numero = precos.unshift(53.4);

//Retorna um novo array a partir do índice informado
numero.slice(0, 1); // a partir do índice 0, pegue até o índice 1 sem inclui-lo
console.log(novo); // [53.4]

var juntar = numero.concat(impares)// concatena as duas arrays (a ordem altera conforme a forma q vc concatena, exemplo: impares.concat(pares) iria resultar em um array com a array de impares no inicio e pares no final.)
console.log(juntar);

nomes.sort(); // Ordenando array de strings (.sort() é apenas para Strings)
console.log(nomes);

var precos = [123.55, 42.27, 546.99, 23.12];

precos.sort(function(a, b){return a - b;});
console.log(precos); //Ordenando array de float

//Alterando o valor a partir do índice
alunos[3] = 'Tainá';
console.log(alunos);

//Deletanto dados de um array

delete familia[7]; // deletando dados de um array (sobra empty item)

familia.splice(7, 1) // a partir do índice 7 deleta 1 elemento

familia.splice(7, 0 , 'Julia') // A partir do índice 7 não delete nenhum, mas adicione 'Julia'

greeting.trim(); // remove espaços da string

// existem as que removem em apenas na opção desejada
greeting.trimStart(); // começo

greeting.trimEnd() // final
