// Manipulação de Datas

const data = new Date(); // Sem parâmetro obtemos a data atual.

// Manipular new Date.

const data01 = new Date("2023-03-12"); // forma 1
// 2023-03-12T00:00:00.000Z

const data02 = new Date("2023-03-12 10:12:00"); // forma 2
// 2023-03-12T13:12:00.000Z


const data03 = new Date(2020, 2, 28, 13, 20, 2, 15); // forma 3
// 2020-03-28T16:20:02.015Z

console.log(data.toLocaleString()); // imprimindo uma string com data e hora local.
console.log(data.toString()); // imprime a data em string.
console.log(data.toUTCString()); // imprime a data universal (UTC) em string.
console.log(data.valueOf()); // TimeStamp

// Getters

const ano = data.getFullYear(); // ano atual
const mes = data.getMonth(); // mês atual (0 à 11)
const dia = data.getDate(); // dia atual

const hora = data.getHours(); // hora atual (0 à 23)
const minutos = data.getMinutes(); // minutos atuais (0 à 59)
const segundos = data.setSeconds(); // segundos atuais (0 à 59)
const milisegundos = data.getMilliseconds() // milisegundos atuáis (0 à 999)

const day = data.getDay(); // referente ao dia da semana (0 à 6)

console.log(`Hoje é dia: ${dia}/${mes + 1}/${ano} \nHorário: ${hora + 1}:${minutos + 1}:${segundos + 1}:${milisegundos + 1} `);

console.log(dia);

//Nós temos todas essas funções de data tbm para UTC.

console.log( data.getUTCFullYear() );
console.log( data.getUTCMonth() );
console.log( data.getUTCDate() );
console.log( data.getUTCHours() );
console.log( data.getUTCMinutes() );
console.log( data.getUTCSeconds() );
console.log( data.getUTCMilliseconds() );
console.log( data.getUTCDay() );

console.log(data.getTime()); // retornando timestamp
console.log(data.getTimezoneOffset()); // retornando em minutos a diferença de fuso (o resultado é a diferença entre o fuso do local e o UTC)
console.log(data.valueOf()); // TimeStamp

// Getters de Conversão

