//Operadores Lógicos (Boolean)
var curso = "JavaScript";
var legal = true;

//AND && (e =  as duas expressões devem ser verdadeiras para o resultado ser verdadeiro.)

if(curso === "JavaScript" && legal === true){
    console.log('O curso de JavaScript é legal.');
}else{
    console.log('O curso não é de JavaScript ou não é legal.');
}

//OR || (ou = uma das duas expressões deve ser verdadeira para o resultado ser verdadeiro.)

if(curso === 'JavaScript' || legal === false){
    console.log('O curso de JavaScript é legal.');
}else{
    console.log('O curso não é de JavaScript ou não é legal.');
}

//NOT != (não = esse operador é um inversor, ou seja, tudo que é TRUE se torna FALSE e tudo que é FALSE se torna TRUE. (Usado para fazer verificação.))

if(curso != 'JavaScript'){
    console.log('O curso não é de JavaScript');
}else{
    console.log('O curso é JavaScript');
}

//Outro exemplo:

var l = true
console.log(l != true);