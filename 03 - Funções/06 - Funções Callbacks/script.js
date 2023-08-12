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

let alunos = [
    {id: 1, nome: 'Laura', media: 4},
    {id: 2, nome: 'Pedro', media: 3},
    {id: 3, nome: 'Samuel', media: 5},
    {id: 4, nome: 'Samantha', media: 7},
    {id: 5, nome: 'Matheus', media: 8},
    {id: 6, nome: 'Giulia', media: 10}
];

function apresentando(aluno, i){
    console.log(`${i + 1} - a média final do aluno: ${aluno.nome} de id: ${aluno.id} é ${aluno.media}`);
}

alunos.forEach(apresentando)