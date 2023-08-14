//Funções Closures

let variavel = 'Global'; // Pode ser acessada Globalmente no nosso projeto

function imprimir(){
    console.log(variavel); 
}

function outra(){
    let variavel = 'Local'; // Não pode ser acessada Globalmente no nosso projeto (apenas no escopo em q ela existe)
    imprimir()
} // <= esse é o Closure/Escopo da função

imprimir() // Global
outra() // Global