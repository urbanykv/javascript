//Estruturas Condicionais (if & else)
var idade = 18

if(idade >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

if(idade <= 14){
    console.log("Criança");
}else if(idade > 14 && idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

//Dica Geek (verifica valor)
if(1 == "1"){
    console.log('Sim, 1 == "1"');
}else{
    console.log('Não');
}

// Dica Geek (verifica valor e tipo de dado)
if(1 === "1"){
    console.log('Sim, 1 === "1"');
}else{
    console.log('Não');
}

//Estruturas Condicionais (switch)
var sexo = "m"

switch(sexo){
    case "m":
        console.log('Masculino');
        break;
    case "f":
        console.log('Feminino');
        break;
    default:
        console.log("Desconhecido");
        break;
} //Breack = sair do switch

var s = 'm';
var masculino;

if(s === "m"){
    masculino = true;
}else{
    masculino = false;
}

console.log(masculino);

//Simplificando

var masc = (s === 'm');
console.log(masc);