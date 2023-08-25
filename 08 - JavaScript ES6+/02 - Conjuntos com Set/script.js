//Conjuntos com Set

/*
    - Conjuntos não aceitam repetição de valores;
    - Conjuntos não são indexados.
*/
// Declarando conjunto
let cursos = new Set();

//Adicionando valores ao conjunto

cursos.add('Programação para Leigos').add('Algoritmos e Lógica de Programação').add('Programação em Python').add('Banco de Dados') // adicionando ao conjunto


console.log(cursos); // Imprime o conjunto
console.log(cursos.size); // Verificando tamanho
console.log(cursos.has('Banco de Dados')); // Verifica se está no conjunto (ele devolve true ou false.)

cursos.delete('Algoritmos e Lógica de Programação')
// apaga o elemento do conjunto q escolhermos

console.log(cursos);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva']
let frutasUnicas = new Set(frutas)

console.log(frutasUnicas);