//Entendendo e utilizando Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = () => {
    div.innerHTML = '';
    let spanNone = document.createElement('span');
    let txtNome = '';
    let inp = document.querySelector('input').value;

    axios.get(`https://api.github.com/users/${inp}`)
        .then(function(usuario){
            if(usuario.data.name !== null){
                txtNome = document.createTextNode(usuario.data.name);

                let img = document.createElement('img')
                img.setAttribute('src', usuario.data.avatar_url)
                img.setAttribute('alt', usuario.data.name)
                img.setAttribute('width', '45px')


                div.appendChild(img);
            }else{
                txtNome.createTextNode('Não possui nome')
            }
            spanNone.appendChild(txtNome)
            div.appendChild(spanNone)
        })

        .catch(function(error){
            txtNome = document.createTextNode(error)
            spanNone.appendChild(txtNome)
            div.appendChild(spanNone)
        })

}