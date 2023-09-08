//Aprendendo a utilizar Filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pares(n){
    return n % 2 === 0
}

console.log(pares(2));

function impares(n){
    return n % 2 !== 0
}

console.log(impares(3));


//Filtrando apenas os pares
var ret = numeros.filter(pares) 
console.log(ret);


//Filtrando apenas os impares
var ret = numeros.filter(impares) 
console.log(ret);

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3},
]

function filtrarNotasMaioresQueOito (aluno){
    return aluno.nota > 8;
}

function filtrarNotasMaioresQueSete (aluno){
    return aluno.nota > 7;
}

var result = alunos.filter(filtrarNotasMaioresQueOito)
console.log(result);

result = alunos.filter(filtrarNotasMaioresQueSete)
console.log(alunos.length);
console.log(result.length);

const jogos = [
    {nome: 'God of War', plataforma: 'Playstation', valor: 159.99},
    {nome: 'Forza Horizon', plataforma: 'Xbox', valor: 259.99},
    {nome: 'Uncharted', plataforma: 'Playstation', valor: 259.99},
    {nome: 'GTA V', plataforma: 'MultiPlataforma', valor: 59.99}
]