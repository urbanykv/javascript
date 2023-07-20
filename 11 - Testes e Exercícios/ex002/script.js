// 2 - Crie uma função que receba dois valores inteiros como parâmetro e exiba todos os numeros ímpares entre estes dois números (sem incluí-los).

function valores(n1, n2){
    if(n1 % 2 === 0){
        n1++;
    }
    for(let i = n1; i < n2; i += 2){
        console.log(i);
    }
}

valores(1 , 8);