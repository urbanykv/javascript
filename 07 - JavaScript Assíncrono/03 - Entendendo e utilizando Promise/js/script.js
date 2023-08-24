let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

let promise = function(){
    return new Promise(function(resolve, reject){
        let inp = document.querySelector('input').value;
        let ajax = new XMLHttpRequest

        ajax.open('GET', `https://api.github.com/users/${inp}`);

        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText))
                }else{
                    reject('Não foi encontrado')
                }
            }
        }
    })
}

btn.onclick = function(){
    div.innerHTML = '';
    let spanNone = document.createElement('span')
    let txtNome = '';

    promise()
        .then(function(usuario){
            if(usuario['name'] !== null){
                txtNome = document.createTextNode(usuario['name']);

                let img = document.createElement('img')
                img.setAttribute('src', usuario['avatar_url'])
                img.setAttribute('alt', usuario['name'])
                img.setAttribute('width', '45px')

                spanNone.appendChild(txtNome)
                div.appendChild(spanNone)
                div.appendChild(img);
            }else{
                txtNome.createTextNode('Não possui nome')
            }
        })
        .catch(function(error){
            txtNome = document.createTextNode(error)
            spanNone.appendChild(txtNome)
            div.appendChild(spanNone)
        })

}