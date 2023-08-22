//Alterando estilos

let caixa = document.querySelector('.caixa');

caixa.style.width = '200px';
caixa.style.height = '200px';
caixa.style.backgroundColor = 'blue'; // setando estilos a div .caixa


/*
As configurações de estilos via JavaScript seguem os
mesmos conceitos e atributos utilizados via CSS.

OBS: Diferença

em CSS é 'Background-Color'
em JS é backgroundColor

ou seja, JS n aceita '-' para dividir

outro exemplo:

em CSS é border-bottom
em JS é borderBottom
*/

console.log(caixa.getAttribute('class').split('-')[1]); // pegando atributo