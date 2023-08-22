//O que é a DOM (document)

let a = document.querySelector (".link") // document é o nosso documento HTML e querySelector é uma função q recupera um valor do document, no caso a nossa classe .link.

console.log(a.innerText); // Imprimiu o texto da ancora.
console.log(a.parentNode);// Imprimiu o pai da ancora.
console.log(a.parentNode.parentNode.parentNode);// document.
console.log(a.childNodes);// Imprimir filho do ancora.
console.log(a.parentNode.parentNode.firstChild);// primeiro filho do HTML q no caso é o HEAD.
console.log(a.parentNode.parentNode.lastChild);// a msm coisa do firstChild, mas no caso funciona pro ultimo, ou seja, o BODY do HTML.
console.log(a.parentNode.parentNode.firstChild.nextSibling);// Text, pois nextSibling é o irmão mais próximo, e como utilizamos espaços para dividir head e body, o \n é entendido como um elemento do HTML.

/*
RESUMINDO!!!
1 - parentNode = pai do elemento.
2 - childNodes = filho do elemento.
3 - firstChild = primeiro elemento filho.
4 - lastChild = ultimo elemento filho.
5 - nextSibling = próximo irmão do elemento.
6 - previousSibling = irmão anterior do elemento.
*/