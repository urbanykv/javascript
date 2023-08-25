//Object Short Sintax

const nome = 'Programação em JavaScript'
const preco = 'R$ 27,99'
const horas = 25;

const curso = {
    nome, // colocamos uma variavel q vai ter o msm nome do atributo
    preco,
    instrutor: ' Geek University',
    cargaHoraria: horas // nesse caso fazemos dessa forma, pois o atributo n vai ter o msm nome q a variável tem
}

console.log(curso);