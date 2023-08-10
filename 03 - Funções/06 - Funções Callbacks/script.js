// Funções Callbacks

const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Programação em JavaScript',
    'Programação Web com Django Framework',
    'Banco de Dados'
]

let contador = 0;

function apresentar(curso, i){
    console.log(`${i + 1} - ${curso}`);
}

cursos.forEach(apresentar)