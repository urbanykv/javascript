const fs = require('fs')


const promessaLeitura = fs.promises.readFile('12 - Testes e Exercícios/Assincronismo testes/tarefas.csv')

promessaLeitura
    .then((arquivo) => {
        console.log(arquivo.toString('utf8'));
    })
    
const promise = new Promise((resolve, reject) => {
    const numero1 = 25;
    const numero2 = 50;

    const soma = numero1 + numero2;

    if(soma === 75){
        resolve(soma)
    }
})

promise.then((value) => {
    console.log(`O resultado é: ${value}`);
})