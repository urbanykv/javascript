//Escopo de variáveis
function somar(n1, n2){
    //Variável local (só é reconhecida no bloco da function.)
    var valor = 5;
    return valor + n1 + n2;
}

console.log(somar(4,2));

for(var l = 0; l <= 25; l++){
    var outra = 3;
    console.log(l * outra);
}

console.log(outra); // Temos acesso, pois foi declada em um bloco for. (Variável Global)

//Ou seja, as Variáveis Locais são as varáveis que estão nas functions, as Globais são as que estão fora delas.

for(var j = 0; j <= 25; j++){
    let uma = 3; // Variável local (transformamos a variável global em local usando o "let".)
    console.log(j * uma);
}

//a variável J, outra e a L que estão no bloco for são Variáveis globais, mas veja bem, se trocarmos a palavra "var" por "let" a variável que está no for se torna uma variável local igual a variável "valor" da function.