//Métodos de instância e métodos estáticos

class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
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

    imprimirDados(){
        console.log(`${this._marca} ${this._modelo}`);
    }

    static retornar_marca(){
        return "Honda"
    } // Método Estático
}

const carro01 = new Carro('Fit')

console.log(carro01); // Métodos Instância

carro01.imprimirDados()// Métodos Instância

console.log(Carro.retornar_marca()); // Método Estático

Object.defineProperty()