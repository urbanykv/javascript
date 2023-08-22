//Objetos vs Funções

// Criando objeto através de uma factory function

const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando.`),
    }
}

const p1 = pessoa1('Felicity', 'Jones');
console.log(p1);
console.log(typeof(p1));
p1.andar()

// Criando objeto através de Função construtora

function pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    return {
        andar: () => {
            console.log(`${this.nome} ${sobrenome}`);
        }
    }
}

const p2 = pessoa2('Leandro', 'Pinto');

console.log(p2);
console.log(typeof(p2));
p2.andar()

// Criando objeto através de uma Classe.
class Pessoa3{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get(){
        return this._nome
    }

    set(nome){
        this._nome = nome;
    }

    get(){
        return this._sobrenome
    }

    set(sobrenome){
        this._sobrenome = sobrenome;
    }
}

const pessoa = new Pessoa3("Nilda", "Oliveira")

console.log(pessoa);

console.log(`${pessoa._nome} ${pessoa._sobrenome}`);