//Trabalhando com a DOM

let texto = document.getElementById('produto'); // ID
let spans = document.getElementsByTagName('span'); // TAG
let div = document.getElementsByClassName('.container'); // Class

console.log(texto);
console.log(spans);
console.log(div);

console.log(spans[0].textContent);
console.log(spans[1].innerText);

spans[0].textContent = 'JavaScript'

let span = document.getElementsByTagName('span')[0]; // escolhe um unico elemento por indexação no código. 

let inp = document.querySelector('body div.container input'); // buscando elemento usando os elementos pais como base para a busca, ou seja, input é filho da div.container q é filha do body.

/*
.querySelector = é flexivel e pode ser usado para buscar tanto o id, quanto class e tag.

.querySelectorAll = A msm coisa q o .querySelector, mas no caso é usado para buscar todos os elementos do documento com aquele id, tag ou class.
*/

let imp = document.querySelector('input[name=produto]')
// buscando input que tem o name = produto.

span.style.textTransform = 'uppercase';

let btn = document.querySelector('button');

btn.onclick = () => {
    alert('Mensagem...')
}