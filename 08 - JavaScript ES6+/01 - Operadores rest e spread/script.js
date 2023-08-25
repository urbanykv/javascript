//Operadores rest e spread

//Rest/Spread (Juntar/Espalhar) -> ...

function total(...precos){
    let total = 0;
    precos.forEach(p => total += p)

    return total
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

let frutas = ['Manga', 'Uva', 'Melância']
let frios = ['Queijo', 'Presunto', 'Salame']

let compras = [...frutas, ...frios]

console.log(compras);