//Eventos inline

function mostrarAlerta(){
        alert('o botão foi clicado.')
}

function mudarTexto(elemento){
    elemento.innerHTML = "Eu estou avisando!"
}

function mudarCor(){
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange']
    const numero = Math.floor(Math.random() * cores.length + 1)

    document.bgColor = cores[numero]
}

function escreveTexto(input){
    let span = document.getElementById('info')
    span.innerHTML = input.value
}