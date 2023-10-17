
class Pessoa {
    nome;
    idade;
}

const vitor = new Pessoa();

vitor.nome = "Vitor"

vitor.idade = 18

console.log(vitor); // aqui eu posso criar uma pessoa com nome e idade undefined

// agora faremos com constructor

class PessoaConstructor {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Medico extends PessoaConstructor {
    constructor(nome, idade, id, salario){
        super(nome, idade)

        this.id = id;

        this.salario = salario;
    }

    get(){
        return this.id;
    }

    set(id){
        this.id = id;
    }

    get(){
        return this.salario;
    }

    set(salario){
        this.salario = salario;
    }
}


const Renan = new Medico("Renan", 26, 25000, 15000)

console.log(JSON.stringify(Renan));


//exercicio

class Carro{
    constructor(marca, cor, gastoMedioperKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioperKM = gastoMedioperKM;
    }

    calcularViagem(distancia, precoCombustivel){
        return distancia * this.gastoMedioperKM * precoCombustivel 
    }
}

const vectra = new Carro("Chevrolet", "Prata", (1 / 12).toFixed(3))



console.log(vectra);

console.log(vectra.calcularViagem(457, 7).toFixed(0))