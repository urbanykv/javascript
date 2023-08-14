//Função Fábrica

function fabricarCurso(n, p){
    const desconto = 0.90;
    return{
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarCurso());

let cursos = [];

for(let i = 0; i < 5; i++){
    cursos.push(fabricarCurso(`Curso ${i + 1}`, `${19.99 + i * 3}`))
}

console.log(cursos);