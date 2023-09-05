//Realizando requisições AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML

const inp = document.querySelector('input');
const btn = document.querySelector('#btn');
const aplicacaoTela = document.querySelector('#app');

btn.onclick = function(){


    //Limpando conteúdo da div
    aplicacaoTela.innerHTML = '';

    //Instanciando Objeto Ajax (valor 0)
    let ajax = new XMLHttpRequest();

    //Abrir uma conexão (valor 1)
    ajax.open('get', `https://api.github.com/users/${inp.value}`)

    //Enviar requisição
    ajax.send(null);

    //imprimir na tela
    ajax.onreadystatechange = function(){
        //Criar elemento span
        let spanNone = document.createElement('span')

        //Criar a variável de nome
        let txtNome = '';

        /*
        ajax.readyState
        
        0 -> antes da conexão ser aberta

        1 -> após abrir a conexão

        2 -> headers foram recebidos

        3 -> carregando o corpo da requisição (dados)

        4 -> o conteúdo (dados) está pronto para uso

        ajax.status

        200 -> quer dizer que encontrou.

        404 -> not found
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //transformar os dados JSON em Array.
                usuario = JSON.parse(ajax.responseText);

                //verificando através do nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name'])

                    let img = document.createElement('img')
                    img.setAttribute('src', usuario['avatar_url'])
                    img.setAttribute('alt', usuario['name'])
                    img.setAttribute('width', '45px')

                    aplicacaoTela.appendChild(img);
                }
                spanNone.appendChild(txtNome);
                aplicacaoTela.appendChild(spanNone);
            }else{
                txtNome = document.createTextNode(`Usuário ${inp.value} não encontrado`)
                spanNone.appendChild(txtNome);
                aplicacaoTela.appendChild(spanNone);
            }
        }
    }
}