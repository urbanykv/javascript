//Sorteador

let numerosSorteio = [
    {numero: 0, nome: 'Giulia'},
    {numero: 1, nome: 'Leila'},
    {numero: 2, nome: 'Débora'},
    {numero: 3, nome: 'Ignês'},
    {numero: 4, nome: 'Lourdes'},
    {numero: 5, nome: 'Danny'}
]

function sortearNumero(){
    let i = Math.floor(Math.random()*6)
    console.log(`O numero sorteado é: ${numerosSorteio[i].numero}, da pessoa: ${numerosSorteio[i].nome}`);
}

sortearNumero()