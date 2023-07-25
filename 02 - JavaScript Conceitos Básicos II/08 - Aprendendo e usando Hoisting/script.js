//Aprendendo e usando Hoisting

//var nome; //iça a declaração da variável

console.log(nome); // undefined aqui ocorre o Hoisting (içamento)

var nome = 'Geek'; // declarando e inicializando a variável.

console.log(nome); // Geek

//var n tem ordem então Hoisting ocorre, mas com const e let vem a ordem, pois na vdd, não tem o pq de vc pedir uma var q n existe, ou seja, sempre use let e const.