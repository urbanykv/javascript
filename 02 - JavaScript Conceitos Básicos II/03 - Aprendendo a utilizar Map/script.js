//Aprendendo a utilizar Map

var valores = [2, 4, 6, 8, 10];
var dobro = valores.map(function(valor){
    return valor * 5;
}); // O map cria um novo array com o msm lenght que o anterior.

console.log(dobro);

function dobrando(valor){
    return valor * 2;
}
dobro = valores.map(dobrando); //diferente forma de resolver o msm problema.

console.log(dobro);

//Encadeando maps para realizar múltiplas transformações

function soma_4(valor){
    return valor + 4;
}

function dividir_p_5(valor){
    return valor / 5;
}

var result = valores.map(dobrando).map(soma_4).map(dividir_p_5);

function index(valor, indice){
    console.log(indice + ' - ' + valor);
}

result.forEach(index);