//Herança

/*
Funcionários
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

Cliente
    nome,
    sobrenome,
    email,
    cpf,
    renda
Funções
    descricao,
    salario
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this.nome;
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

    get email(){
        return this.email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }
    imprimirDados(){
        console.log(`${this._nome} ${this._sobrenome} ${this._email} ${this._cpf} `); // Imprimir os dados da classe pai
    }
}

class Funcionario extends Pessoa{ // isso se chama herança e o "extends" é usado para fazer essa função.
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf) // Super é o constructor da classe pai(Pessoa), ou seja, ele recebe os atributos da classe Pessoa. 
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf)
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda
    }
    imprimirDados(){
        super.imprimirDados(); // Imprimindo os dados da classe pai.
        console.log(`${this._renda}`); // Imprimir dados classe filha.
    }
}

const Prog = new Funcao('Programador', 8000)

const funcionario01 = new Funcionario('Matheus', 'Urban', 'matheusurban@email.com', '519.777.815-15', Prog, '010101')

const cliente01 = new Cliente('Giulia', 'Urban', 'almeida752@email.com', '519.555.480-78', 52000)

console.log(cliente01);

console.log(funcionario01);

console.log(`Olá ${cliente01._nome}, seja bem vinda a nossa empresa, o nosso funcionário ${funcionario01._nome} irá te atender.`);

console.log(funcionario01._nome + ' ' + funcionario01._sobrenome);
console.log(funcionario01._email);

cliente01.imprimirDados() /* Saída: Giulia Urban almeida752@email.com 519.555.480-78 
52000*/

/*Isso se chama Sobrescrita de método - Overwriting

Polimorfismo
- Dois objetos do msm tipo tendo comportamentos diferentes. (Cliente e Funcionário são duas pessoas, e cada um tem comportamentos diferentes.*/
