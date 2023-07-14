//Introdução a Funções
function somar(num1, num2){
    console.log(num1 + num2);
}

function multiplicar(n1, n2){
    var multi = n1 * n2;
    return multi;
}

function mensagem(){
    console.log('Esta é a minha mensagem.');
}

function verificar(){
    var sexo = 'l'
    if(sexo == 'm'){
        var sexom = 'Sexo selecionado: Masculino!';
        return(sexom);
    }else if(sexo == 'f'){
        var sexof = 'Sexo selecionado: Feminino!';
        return(sexof);
    }else{
        var sexoi = 'Sexo não identificado!';
        return(sexoi);
    }
}

var sexov = verificar();
console.log(sexov);

somar(5, 5);
mensagem();

var resultado = multiplicar(5,3);
console.log(resultado);