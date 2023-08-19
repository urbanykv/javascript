//Instanciando Objetos

class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }
}

class Carro{
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }
    
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

// Instanciação de Objetos - Forma 1 

const curso = new Object();
curso.nome = 'Programação em JavaScript';
curso.preco  = 27.99
console.log(curso);

curso['qtd_alunos'] = 999; // Outra forma de declarar atributos e valores.

console.log(curso);

delete curso.qtd_alunos // ou
delete curso['qtd_alunos']

console.log(curso);


// Instanciação de Objetos - Forma 2 (Forma Literal)

const programa = {
    nome: 'Photoshop',
    preco: 89.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Bahia'},
            {cidade: 'Pernambuco'},
        ]
    }
}

console.log(programa.fabricante);

// Instanciação de Objetos - Forma 3 (Forma Literal)

const pessoa = {};
pessoa.nome = 'Matheus';
pessoa.idade  = 21

console.log(pessoa);

// Instanciação de Objetos - Forma 4 (Função Construtora)

const l1 = (cor) => {
    this.cor = cor
}