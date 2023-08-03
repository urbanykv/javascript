//Funções com parâmetro e retorno

function calcularIdade(anoNascimento){
    const data = new Date(); // Gera a data atual
    const idade = data.getFullYear() - anoNascimento;

    return idade;
}

console.log(calcularIdade(2002));
