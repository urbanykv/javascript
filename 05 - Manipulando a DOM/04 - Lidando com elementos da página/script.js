//Lidando com elementos da página

let btn = document.querySelector('.btn');

btn.onclick = function(){
    // Declara a variável de texto q será add ao p.
    let textElement = '';

    // input
    let inputValue = document.querySelector('input').value;

    //elemento p no HTML criado 00
    let pElement = document.createElement('p'); // cria um elemento no HTML.
    pElement.setAttribute('class', 'classe-p'); // seta Atributos ao elemento.

    if(inputValue !== ''){
        textElement = document.createTextNode(inputValue)
    }else{
        textElement = document.createTextNode('Veio vazio...') // cria o texto q será adicionado ao p. 
    }

    pElement.appendChild(textElement); // adicionando o textElement como filho do pElement

    let divElement = document.querySelector('#app')

    divElement.appendChild(pElement); // adiciona o elemento como filho do elemento escolhido, ou seja, pElement vai ser filho do divElement

    // limpa input
    document.querySelector('input').value = '';
}