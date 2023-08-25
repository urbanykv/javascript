//Usando for of

let nome = 'Geek University'

for (let letra of nome){
    console.log(letra);
}

let numeros = [1, 2, 3, 4, 5]

for(let numero of numeros){
    let multi = numero * 2

    console.log(multi);
}

for(let i in numeros){
    console.log(`${i} - ${numeros[i]}`);
}