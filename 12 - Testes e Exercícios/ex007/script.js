const pessoa = {
    nome: 'Giulia',
    idade: 19,
    dataNascimento: '01/06/2004',
    peso: 60,
    altura: 1.58
}

console.log(pessoa);

console.log(typeof(pessoa));

const pessoaJson = JSON.stringify(pessoa)

console.log(pessoaJson);

console.log(typeof(pessoaJson));