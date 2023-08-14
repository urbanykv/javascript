// Funções Construtoras

function Pessoa(n, s){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = 'Humano';

    // método privado só conseguimos fazer uso dentro da função construtora
    let imprimirDados = () => {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}`);
    }
    // método público conseguimos acessar fora da função construtora

    this.fazerAniversario = () => {
        idade += 1;
        imprimirDados();
    }

    this.getIdade = () => {
        return idade
    }
}

const Debora = new Pessoa('Angelina', 'Femininno')
console.log(Debora); // tudo que é privado n aparece na saída.