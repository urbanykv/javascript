//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function gets(num){
    const valor1 = '';
    const valor2 = '';
    const resposta = [valor1, valor2]
    return resposta[num-1]
}

function print(texto){
console.log(texto n/)
}

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets(10));
const totalPassos = parseInt(gets(6));

console.log(typeof(totalPassos));

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);