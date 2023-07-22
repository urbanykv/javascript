//Trabalhando com Foreach

var cursos = [
    'Programação para leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
];

//Definir uma função

function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
}

//para cada
cursos.forEach(imprimir);

//utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, i){
    console.log(`${i} - ${curso}`); 
});

//usando for
for(i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}