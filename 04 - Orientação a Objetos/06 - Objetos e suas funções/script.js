//Objetos e suas funções

const curso = {
    nome:'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

console.log(curso);
console.log(Object.keys(curso)); // mostra os atributos(chaves).

console.log(Object.values(curso)); // mostra os valores.

console.log(Object.entries(curso)); // array de arrays com chaves e valores.

Object.entries(curso).forEach(par => console.log(`${par[0]}: ${par[1]}`)) // usando forEach na função entries do objeto.

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(curso, 'publicacao', /* chave*/ {
    enumerable: true, // quando true imprime junto com as outras propriedades já setadas no objeto.
    writable: false, // não pode ser alterado quando false.
    value: '07/12/2019' // valor.
}); // Defini uma nova propriedade do objeto (valor e chave).

Object.freeze(curso); // transforma todas as propriedades em writable: false.

const usuarios = [
    {nome: 'Thiago', empresa: 'Amazon'},
    {nome: 'Rebeca', empresa: 'Amazon'},
    {nome: 'Matheus', empresa: 'Google'},
    {nome: 'Giulia', empresa: 'USP'},
    {nome: 'Claudecir', empresa: 'Udemy'},
    {nome: 'Marta', empresa: 'PsicoRed'}
]

console.table(usuarios); // colocando os objetos em tabela.